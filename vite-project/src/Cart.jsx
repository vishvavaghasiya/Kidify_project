import React from 'react'
import { FaCalendar } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Cart = () => {
  return (
    <div>
              <div className=' h-full w-full font-bold text-4xl  '>Cart</div>
        <h1 className=' mt-3 -ml-20  text-purple-400'>Home  </h1>
        <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[570px] -mt-5 text-2xl'/>
        <h1 className='-mt-6 ml-[100px] text-gray-600'>Cart</h1>     
        <div className='h-1 w-77 mt-60 bg-purple-400'></div>
        <div className='relative'>
        <FaCalendar className='text-purple-400 mt-2 absolute '/>
         <div className='p-2  bg-slate-300 '>your wishlist is currently empty.</div>
         </div>
         <button className='h-12 w-64 me-[900px]  mt-10 rounded-md bg-purple-400  text-white font-bold '>Return to shop</button>
      <div className='flex justify-around relative overflow-hidden  -ml-40'>
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 40.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 43.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 42.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 45.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 41.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 44.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 42.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 45.png" alt="" />
        <div className='h-8 w-64 mt-[180px] rounded-md font-bold absolute bg-white text-purple-400 '>INSTAGRAM FEED</div>
       </div>
    </div>
  )
}

export default Cart
