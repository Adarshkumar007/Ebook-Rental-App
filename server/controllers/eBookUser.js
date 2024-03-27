import { eBook } from "../models/ebook.js";

const eBookPreImage=async (req, res) => {
    try {
      const ebook = await eBook.find({}).select('_id bookImage');
      if (!ebook) {
        return res.status(404).json({ message: 'Ebook not found' });
      }
      const updatedEbook = ebook.map(item => {
        const imageBase64 = Buffer.from(item.bookImage.data).toString('base64');
        const imageSrc = `data:${item.bookImage.contentType};base64,${imageBase64}`;
        return { _id: item._id, imageSrc: imageSrc };
      });
      res.status(200).json(updatedEbook);
    } catch (error) {
      console.error('Error fetching ebook:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  export default eBookPreImage;