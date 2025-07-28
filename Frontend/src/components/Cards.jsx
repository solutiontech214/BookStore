import React from 'react'

const Cards = ({item}) => {
    console.log(item)
  return (
   <>
   <div>
    <div className="card bg-base-100 w-92 md:w-72  transition-all ease-in-out mb-10 hover:shadow-gray-600   hover:shadow-xl border-1 dark:border-0   space-x-2 rounded-lg max-w-80  hover:scale-105 dark:bg-black dark:text-white duration-300 ">
  <figure>
    <img className='w-full h-fit'
      src={item.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.title}
      <div className="badge bg-green-300">{item.category}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-start">
      <div className="badge badge-outline hover:text-amber-500">Author : {item.author}</div>
      <div className="badge badge-outline hover:text-amber-500">Price : {item.price}</div>
      <div className="badge badge-outline hover:text-amber-500">Read More</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards