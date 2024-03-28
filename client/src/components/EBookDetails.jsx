import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./MyComponent/Card";
import PdfViewer from "./MyComponent/PdfViewer";

const EBookDetails = () => {
    const { key } = useParams();
    const [ebook ,setEbook] = useState([]);
    useEffect(() => {
        // Fetch ebook details
        axios.get(`http://localhost:5000/ebook?key=${key}`)
            .then(response => {
                console.log("Ebook details:", response.data.fileSrc);

                setEbook(response.data);
            })
            .catch(error => {
                console.error('Error fetching ebook details:', error);
            });
    }, [key]);  

    return (
        <div>
        <h1>{ebook.title}</h1>
        <h3>{ebook.publisherName}</h3>
        <h3>{ebook.category}</h3>
        <Cards  key ={1} image={ebook.imageSrc}/>
        <div>
        <PdfViewer pdfUrl={ebook.fileSrc} />
        </div>
        </div>
    ); 
};

export default EBookDetails;
