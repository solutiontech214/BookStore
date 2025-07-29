import React from 'react';

const Cards = ({ item }) => {
  return (
    <div className="p-3"> {/* Add padding to separate cards properly */}
      <div className="card bg-base-100 w-full md:w-72 transition-all ease-in-out hover:shadow-xl border dark:border-0 rounded-lg hover:scale-105 duration-300 dark:bg-black dark:text-white overflow-hidden">
        <figure>
          <img
            className="w-full h-60 object-cover rounded-t-lg"
            src={item.cover}
            alt="Book Cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
            <div className="badge bg-green-300">{item.category}</div>
          </h2>
          <p className="text-sm">Find out more about this exciting book!</p>
          <div className="card-actions justify-start flex-wrap gap-2">
            <div className="badge badge-outline hover:text-amber-500">
              Author: {item.author}
            </div>
            <div className="badge badge-outline hover:text-amber-500">
              Price: {item.price}
            </div>
            <div className="badge badge-outline hover:text-amber-500">
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
