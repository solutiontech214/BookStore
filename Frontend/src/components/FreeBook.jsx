import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../list.json'
import Cards from "./Cards";
function FreeBook() {
  const freebook = list.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };
  return (
    <>
      <div className="max-w-screen-2xl mb-10  container mx-auto md:px-20 px-5">
        <div>
             <h1 className="text-xl font-semibold pb-2 ">Free Books</h1>
        <p className="mb-10">Unlock worlds of wonder and imagination—find your perfect read at our bookstore today!</p>
       
       
      </div>
      <div className="slider-container max-h-max ">
        <Slider {...settings}>
        {
            freebook.map((items,idx) => (
  <Cards key={items.id} item={items}  />
))
        }
      </Slider>
    </div>
      </div>
    </>
  );
}

export default FreeBook;
