import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "./MyComponent/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Swipper = () => {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 6,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
               
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 438,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 302,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ],
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };

  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const images = [];
      for (let i = 1; i <= 12; i++) {
        const image = await import(`../components/images/image${i}.jpg`);
        images.push(image.default); // Adding the default property of the imported module
      }
      setImageUrls(images);
    };

    importImages();
  }, []);

  return (
    <>
    <Slider {...settings} >
      {imageUrls.map((imageUrl, index) => (
        <Cards key={index} image={imageUrl} />
      ))}
      </Slider>
    </>
  );
};

export default Swipper;
