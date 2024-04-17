import { eBook } from "../models/ebook.js";

export const eBookPublish=async(req,res)=>{
    try {
        const newBook = new eBook({
          title: req.body.title,
          publisherId:req.user.userId,
          publisherName: req.body.author,
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
          }
        });
    
        await newBook.save();
        res.status(201).send('Book saved successfully');
      } catch (error) {
        console.error('Error saving book:', error);
        res.status(500).send('Internal server error');
      }

}
export const eBookCollection = async (req, res) => {
  try {
    const userId = req.body.user;
    const books = await eBook.find({ userId: userId });
    if (books.length > 0) {
      const updatedEbook = books.map(item => {
        const imageBase64 = Buffer.from(item.bookImage.data).toString('base64');
        const imageSrc = `data:${item.bookImage.contentType};base64,${imageBase64}`;
        return { _id: item._id, imageSrc: imageSrc ,title:item.title };
      });
      return res.status(200).send({ books: updatedEbook });
    } else {
      return res.status(404).send({ message: "Books not found" });
    }
  } catch (error) {
    console.error('Error fetching books:', error);
    return res.status(500).send({ message: "Error fetching books" });
  }
};