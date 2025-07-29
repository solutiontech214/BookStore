import React from 'react'
import list from '../list.json'
import Cards from '../components/Cards'

const Store = () => {
  return (
    <>
      <div className='w-full max-w-screen-2xl mx-auto md:px-20 px-5 mr-30  '>
        {/* Welcome message */}
        <div className='mt-20 flex flex-col items-center justify-center text-center space-y-4 mr-10'>
          <h1 className='text-4xl font-semibold'>
            Welcome back! Your next favorite story is <span className='text-orange-300'>Just a Page Away.</span>
          </h1>
          <p className='text-xl max-w-xl'>
            "There’s a whole world waiting for you inside each book — whether you're looking for inspiration, knowledge, or a little escape. Just one page can spark a new idea or change your mood. So take a deep breath, pick your next read, and let the journey begin. Your story <span className="text-gray-800 dark:text-amber-400 font-semibold">continues here!"</span>
          </p>
        </div>

        {/* Card Grid */}
        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full ml-[-20px]'>
          {
            list.map((items) => (
              <Cards item={items} id={items.id} key={items.id} className="sm:mr-20"/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Store
