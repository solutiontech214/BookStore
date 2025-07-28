import React from 'react'
import list from '../list.json'
import Cards from '../components/Cards'
const Store = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-5'>
      <div className='mt-30 items-center justify-center md:text-center  space-y-8 md:space-y-4  text-justify'>
        <h1 className='text-4xl font-semibold '>Welcome back! Your next favorite story is <span className='text-orange-300'>Just a Page Away.</span> </h1>
        <p className='text-xl space-x-1'>
          "There’s a whole world waiting for you inside each book — whether you're looking for inspiration, knowledge, or a little escape. Just one page can spark a new idea or change your mood. So take a deep breath, pick your next read, and let the journey begin.Your story  <span  className="text-gray-800 dark:text-amber-400 font-semibold">continues here!"</span>
        </p>
      </div>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 max-h-fit'>
        {
          list.map((items)=>{
            return <Cards item={items} id={items.id} className=''/>
          })
        }
      </div>
    </div>
    </>
  )
}

export default Store