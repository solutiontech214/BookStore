import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import axios from "axios";


function FreeBook() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("https://book-store-5jxk.vercel.app/book");
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  const freeBooks = books.filter((book) => book.category === "free");

  const settings = {
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="max-w-screen-2xl mb-10 mt-10 mx-auto px-5 md:px-20">
        <h1 className="text-xl font-semibold pb-2">Free Books</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mb-10 mt-10 mx-auto px-5 md:px-20">
      <div>
        <h1 className="text-xl font-semibold pb-2">Free Books</h1>
        <p className="mb-10 ml-0">
          Unlock worlds of wonder and imagination—find your perfect read at our bookstore today!
        </p>
      </div>

      <div className="slider-container flex justify-center">
        <div className="w-full md:w-[90%]">
          <Slider {...settings}>
            {freeBooks.map((items) => (
              <Cards key={items._id} item={items} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FreeBook;
