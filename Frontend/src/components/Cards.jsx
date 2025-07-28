import React from 'react'

const Cards = ({item}) => {
    console.log(item)
  return (
   <>
   <div>
    <div className="card bg-base-100 w-72 duration-400 transition-all ease-in-out hover:w-90  shadow-sm  border-1 border-pink-400space-x-2 rounded max-w-80 MAX-H-96 ">
  <figure>
    <img className='w-full h-fit'
      src={item.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-start">
      <div className="badge badge-outline">Author : {item.author}</div>
      <div className="badge badge-outline">Price : {item.price}</div>
      <div className="badge badge-outline">Read More</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards