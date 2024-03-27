import { eBook } from "../models/ebook.js";

export const eBookPublish=async(req,res)=>{
    console.log(req.files['file'][0].buffer);
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
          }
        });
    
        await newBook.save();
        res.status(201).send('Book saved successfully');
      } catch (error) {
        console.error('Error saving book:', error);
        res.status(500).send('Internal server error');
      }

}