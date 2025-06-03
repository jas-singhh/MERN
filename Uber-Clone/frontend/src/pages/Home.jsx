import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='h-screen bg-[url("https://wallpaperaccess.com/full/15342514.jpg")] bg-cover bg-no-repeat flex flex-col justify-between'>

        <img src="https://pngimg.com/uploads/uber/small/uber_PNG16.png" alt="Uber Logo" className='w-20 ml-6'  />

        <div className="bg-white py-8 px-4 flex flex-col ">
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to="/login" className='bg-black text-white py-3 px-4 w-full mt-5 rounded flex justify-center items-center font-semibold'>Continue</Link>
        </div>
    </div>
  )
}

export default HomePage;