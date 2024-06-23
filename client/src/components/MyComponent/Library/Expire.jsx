import React, { useState, useEffect } from 'react';
import { IoIosTimer } from "react-icons/io";

const Expire = ({ end_date,setIsExpiredParent }) => {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const checkExpiration = () => {
      const currentDate = new Date();
      const expirationDate = new Date(end_date);
      // Set expiration date time to 00:00:00 to match the date only format
      expirationDate.setHours(0, 0, 0, 0);
      if (currentDate >= expirationDate) {
        setIsExpired(true);
        setIsExpiredParent(true);
      } else {
        setIsExpired(false);
        setIsExpiredParent(false);
      }
    };

    checkExpiration();

    const interval = setInterval(checkExpiration, 60000);

    return () => clearInterval(interval); 
  }, [end_date]);

  return (
    <div>
      {!isExpired?<span className="badge d-flex align-items-center p-1 pe-2 text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-pill">
      <IoIosTimer className="rounded-circle me-1" size={15}/>
      {end_date}
    </span>:<span className="badge d-flex align-items-center p-1 pe-2 text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-pill">
      Expired</span>
}
    </div>
  );
};

export default Expire;
