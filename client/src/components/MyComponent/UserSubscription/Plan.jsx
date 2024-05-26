import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { url } from "../../../url";

const Plan = ({plan , onClick}) => {
  const [isSubscribed , setIsSubscribed] = useState(false);
    console.log(plan);
    const bookId = useSelector((state) => state.currentBookID.currentBookID);
    const isnewSubscribed = useSelector((state) => state.isNewSubscribed.isSubscribed);

    useEffect(()=>{
      if(isnewSubscribed){
      console.log("second");
        axios.get(url + `/issubscribed?bookId=${bookId}&plan=${plan.month}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
          setIsSubscribed(response.data.subscribed);
      })
      .catch((error) => {
          console.error("Error fetching ebook details:", error);
      });
    }
    },[isnewSubscribed])
    useEffect(()=>{
      console.log("first");
      axios.get(url + `/issubscribed?bookId=${bookId}&plan=${plan.month}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
          // setEbook(response.data);
          setIsSubscribed(response.data.subscribed);
      })
      .catch((error) => {
          console.error("Error fetching ebook details:", error);
      });
    },[])
  return (
    <div className="Plan">
      <div className="month">
        <div>{plan.month}</div>
        <div>month</div>
      </div>
      <div className="price">
        {" "}
        <div>₹</div>
        <div>{plan.price}</div>
      </div>
      {!isSubscribed?(<button type="button" className="btn btn-danger Subscribe-Button" onClick={onClick}>
        Subscribe
      </button>):<button type="button" className="btn btn-success Subscribe-Button">
        Subscribed
      </button>}
      
    </div>
  );
};
export default Plan;
