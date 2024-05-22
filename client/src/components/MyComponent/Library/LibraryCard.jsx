import "bootstrap/dist/css/bootstrap.css";
import Expire from "./Expire";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../url";
import moment from 'moment';
const LibraryCard = ({book}) => {
  const [imageSrc , setImageSrc] = useState("");
  const [date ,setDate] = useState(null)
  useEffect(()=>{
   const getImage = async() =>{
    try {
      const response = await axios.get(url+`/bookimage/${book.book}`);
      setImageSrc(response.data.imageSrc);
    } catch (error) {
      console.error('Error fetching book IDs:', error);
    }
const datetime = book.end_date;
setDate(moment(datetime).format('YYYY-MM-DD'));

   }
   getImage();
  },[])
  return (
    <div className="card cart-card">
      <img src={imageSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="expire">
          <Expire end_date={date} />
        </div>

        <a href="#" className="details btn btn-primary" >
          Read
        </a>
      </div>
    </div>
  );
};

export default LibraryCard;
