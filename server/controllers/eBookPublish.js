import { Seller } from "../models/Seller.js";
import { Cart } from "../models/cart.js";
import { eBook } from "../models/ebook.js";

export const eBookPublish=async(req,res)=>{
    try {
      console.log("plans",req.body.plans);
      const seller = await Seller.findOne({_id:req.user.userId});
      console.log(seller);
        const newBook = new eBook({
          title: req.body.title,
          publisherId:req.user.userId,
          publisherName:seller.username,
          authorName: req.body.author,
          description: req.body.description,
          category:req.body.category,
          bookImage: {
            data: req.files['image'][0].buffer,
            contentType: req.files['image'][0].mimetype
          },
          bookFile: {
            data: req.files['file'][0].buffer,
            contentType: req.files['file'][0].mimetype
          },
          preFile: {
            data: req.files['prefile'][0].buffer,
            contentType: req.files['prefile'][0].mimetype
          },
          plan:JSON.parse(req.body.plans)
      });
    
        await newBook.save();
        console.log("book saved");
        res.status(201).send('Book saved successfully');
      } catch (error) {
        console.error('Error saving book:', error);
        res.status(500).send('Internal server error');
      }

}
export const eBookUpdate = async (req, res) => {
  try {
    console.log("plans", req.body);
    
    // Find the eBook by ID
    const eBookId = req.body.id;
    const existingBook = await eBook.findById(eBookId);
    if (!existingBook) {
      return res.status(404).send('E-Book not found');
    }

    const seller = await Seller.findOne({ _id: req.user.userId });
    if (!seller) {
      return res.status(404).send('Seller not found');
    }

    // Update the eBook fields
    existingBook.title = req.body.title;
    existingBook.publisherId = req.user.userId;
    existingBook.publisherName = seller.username;
    existingBook.authorName = req.body.author;
    existingBook.description = req.body.description;
    existingBook.category = req.body.category;

    if (req.files &&req.files['image']) {
      existingBook.bookImage = {
        data: req.files['image'][0].buffer,
        contentType: req.files['image'][0].mimetype,
      };
    }

    if (req.files &&req.files['file']) {
      existingBook.bookFile = {
        data: req.files['file'][0].buffer,
        contentType: req.files['file'][0].mimetype,
      };
    }

    if (req.files &&req.files['prefile']) {
      existingBook.preFile = {
        data: req.files['prefile'][0].buffer,
        contentType: req.files['prefile'][0].mimetype,
      };
    }

    existingBook.plan = JSON.parse(req.body.plan);

    // Save the updated eBook
    await existingBook.save();
    console.log("book updated");
    res.status(200).send('Book updated successfully');
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).send('Internal server error');
  }
}

export const eBookCollection = async (req, res) => {
  try {
    const userId = req.user.userId;
    const books = await eBook.find({ publisherId: userId });
    if (books.length > 0) {
      const updatedEbook = books.map(item => {
        const imageBase64 = Buffer.from(item.bookImage.data).toString('base64');
        const imageSrc = `data:${item.bookImage.contentType};base64,${imageBase64}`;
        const preFileBase64 = Buffer.from(item.preFile.data).toString('base64');
        const preFileSrc = `data:${item.preFile.contentType};base64,${preFileBase64}`;
        const fileBase64 = Buffer.from(item.bookFile.data).toString('base64');
        const fileSrc = `data:${item.bookFile.contentType};base64,${fileBase64}`;
        return { _id: item._id,
           title:item.title,
           publisherName: item.publisherName,
           category: item.category,
           imageSrc: imageSrc,
           preFileSrc: preFileSrc,
           fileSrc:fileSrc,
           plan:item.plan,
           description: item.description };
      });
      return res.status(200).send({ books: updatedEbook });
    } else {
      return res.status(404).send({ message: "No books found" });
    }
  } catch (error) {
    console.error('Error fetching books:', error);
    return res.status(500).send({ message: "Error fetching books" });
  }
};
export const addcart = async (req, res) => {
  const userId = req.user.userId;
  const bookId  = req.body.bookId;

  try {
    const existingCartItem = await Cart.findOne({ user_id: userId });

    if (!existingCartItem.bookIds.includes(bookId)) {
        existingCartItem.bookIds.push(bookId);
        await existingCartItem.save();
    } else {
        const newCartItem = new Cart({ user_id: userId, bookIds: [bookId] }); // Initialize bookIds as an array
        await newCartItem.save();
    }

    res.status(200).json({ message: 'Book added to cart' });
} catch (error) {
    console.error('Error adding book to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
}
}
export const removeCart = async(req, res) => {
  const bookIdToRemove = req.params.id;
  const userId = req.user.userId;

  Cart.updateOne(
    { user_id: userId }, // Replace 'user_id_here' with the actual user ID
    { $pull: { bookIds: bookIdToRemove } }
)
.then(result => {
    console.log('Book ID removed from cart:', result);
    res.status(200).json({ message: 'Book ID removed from cart' });     
})
.catch(error => {
    res.status(500).json({ error: 'Internal server error' });
});

}