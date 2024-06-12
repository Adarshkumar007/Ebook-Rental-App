import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SellerBookCard from "./SellerBookCard";

const SellerSwipper = ({ books, onClick }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
    <Slider {...settings}>
      {books.map((ebook) => (
        <SellerBookCard
          key={ebook._id}
          id={ebook._id}
          image={ebook.imageSrc}
          title={ebook.title}
          publisher={ebook.publisherName}
          category={ebook.category}
          description={ebook.description}
          plan={ebook.plan}
        />
        
      ))}
    </Slider>
  </div>
  );
};

export default SellerSwipper;
