const Personaldetails = ({learnings,cearnings,seller}) => {

  return (
    <div className="Personaldetails">
      <div className="single-Personaldetails">
        <div className="what-details">Name</div>
        <div className="personal-content"><span className="mycolon">: </span>{seller.name}</div>
      </div>
      <div className="single-Personaldetails">
        <div className="what-details">Email</div>
        <div className="personal-content"><span className="mycolon">: </span>{seller.email}</div>
      </div>
      <div className="single-Personaldetails">
        <div className="what-details">Phone</div>
        <div className="personal-content"><span className="mycolon">: </span>{seller.phone}</div>
      </div>
      <div className="single-Personaldetails">
        <div className="what-details">Address</div>
        <div className="personal-content"><span className="mycolon">: </span>{seller.address}</div>
      </div>
      <div className="single-Personaldetails">
        <div className="what-details">Pincode</div>
        <div className="personal-content"><span className="mycolon">: </span>{seller.pin}</div>
      </div>
      <div className="single-Personaldetails">
        <div className="what-details">Total subscribes</div>
        <div className="personal-content"><span className="mycolon">: </span>{learnings.count}</div>
      </div>
      <div className="single-Personaldetails">
        <div className="what-details">Lifetime Earning</div>
        <div className="personal-content"><span className="mycolon">: </span>{learnings.totalSum/100}</div>
      </div>
      <div className="single-Personaldetails">
        <div className="what-details">Current Earning</div>
        <div className="personal-content"><span className="mycolon">: </span>{cearnings/100}</div>
      </div>
    </div>
  );
};

export default Personaldetails;
