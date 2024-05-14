import { eBook } from "../models/ebook.js";
import pkg from 'pdfjs-dist/build/pdf.js';
const { getDocument, GlobalWorkerOptions } = pkg;

export const eBookPreImage=async (req, res) => {
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
  
  export const eBookDisplay= async(req, res) => {
    const key = req.query.key; // Get the 'key' query parameter
    try {
    const ebook = await eBook.findById(key);
    if(ebook){
    const imageBase64 = Buffer.from(ebook.bookImage.data).toString('base64');
    const imageSrc = `data:${ebook.bookImage.contentType};base64,${imageBase64}`;
    const fileBase64 = Buffer.from(ebook.preFile.data).toString('base64');
     const fileSrc = `data:${ebook.preFile.contentType};base64,${fileBase64}`;
    //const pdfBuffer =ebook.bookFile.data;
    //const pageNumbers = [1, 2, 3];
    
      // const pages = await extractPagesFromPdfBuffer(pdfBuffer, pageNumbers);
      const eBookObj = {
          id:ebook._id,
          title: ebook.title,
          publisherName: ebook.publisherName,
          category: ebook.category,
          imageSrc: imageSrc,
          pages: fileSrc,
          description: ebook.description
      };
      res.json(eBookObj);
      }
      else {
        res.status(404).json({ error: 'Ebook not found' });
    }
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to extract pages from PDF' });
  }
  
    
};
export const getCategories = async(req,res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const getBooks = async (req, res) => {
  const categoryType = req.params.category;
  try {
    const ebook = await eBook.find({category:categoryType}).select('_id bookImage category');
 

    if (ebook.length === 0) {
      return res.status(200).json([]);
    }
    console.log(categoryType);    
    const updatedEbook = ebook.map(item => {
      const imageBase64 = Buffer.from(item.bookImage.data).toString('base64');
      const imageSrc = `data:${item.bookImage.contentType};base64,${imageBase64}`;
      return { _id: item._id, imageSrc: imageSrc ,category:item.category };
    });
    res.status(200).json(updatedEbook);
  } catch (error) {
    console.error('Error fetching ebook:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
export const getBookInfo = async(req, res) => {
  const bookId = req.query.bookId;

  
  eBook.findById(bookId).select('_id title bookImage')
    .then(book => {    
      const imageBase64 = Buffer.from(book.bookImage.data).toString('base64');
      const imageSrc = `data:${book.bookImage.contentType};base64,${imageBase64}`;
      res.status(200).json({ _id: book._id, imageSrc: imageSrc ,title:book.title });
    })
    .catch(error => {
      console.error('Error fetching book information:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}
// GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js';

// async function extractPagesFromPdfBuffer(pdfBuffer, pageNumbers) {
//   const pdf = await getDocument({ data: pdfBuffer }).promise;
//   const pagesData = [];
//   for (const pageNumber of pageNumbers) {
//     if (pageNumber <= pdf.numPages) {
//       const page = await pdf.getPage(pageNumber);
//       const pageData = await page.getTextContent();
//       pagesData.push(pageData);
//     }
//   }
//   return pagesData;
// }
