import React from 'react'
// import { IoIosCall } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
// import { MdOutlineLocalPostOffice } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { FaFacebookF } from "react-icons/fa";
// import { TiSocialTwitter } from "react-icons/ti";
// import { FaInstagram } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa6";
// import { IoLogoYoutube } from "react-icons/io5";




const Wishlist1 = () => {
  return (
    <>
    <div >
        <div className=' h-full w-full font-bold text-4xl  '>Wishlist</div>
        <h1 className=' mt-3 -ml-20  text-purple-400'>Home  </h1>
        <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[564px] -mt-5 text-2xl'/>
        <h1 className='-mt-6 ml-[100px] text-gray-600'>  Wishlist</h1>     
        <div className='h-1 w-77 mt-60 bg-purple-400'></div>
        <div className='relative'>
        <FaCalendar className='text-purple-400 mt-2 absolute '/>
         <div className='p-2  bg-slate-300 '>your wishlist is currently empty.</div>
         </div>
         <button className='h-12 w-64 me-[900px]  mt-10 rounded-md bg-purple-400  text-white font-bold '>Return to shop</button>
      <div className='flex justify-around relative'>
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 43.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05] ' src="./src/assets/asset 42.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 45.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 41.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05]' src="./src/assets/asset 44.png" alt="" />
        <img className='h-[180px] w-[180px] mt-28 hover:scale-[1.05] ' src="./src/assets/asset 42.png" alt="" />
        <div className='h-8 w-64 mt-[180px] rounded-md font-bold absolute bg-white text-purple-400 '>INSTAGRAM FEED</div>
       </div>
        {/* <div>
       <div className='font-bold text-2xl mt-24 mr-[999px]  '>CONTACT</div>
          <h1 className=' mt-[40px] ml-[-850px] text-xl text-black'>Monday to Friday 8 a.m - 5 p.m</h1>
          <div className='flex mt-3'>
             <IoIosCall className='text-2xl ml-2 text-gray-500'/>
            <h1 className=' ml-3 text-xl '>+01 456 789</h1>
          </div>
          <div className='flex mt-3'>
             <IoIosCall className='text-2xl ml-2 text-gray-500'/>
            <h1 className=' ml-3 text-xl '>+01 456 789</h1>
          </div>
          <div>
          <MdOutlineLocalPostOffice className='text-gray-500 text-3xl ml-2 mt-[10px]'/>

          <h1 className='mr-[900px] mt-[-28px] text-xl'>contact@kidify.com</h1>
          </div>
          <div className='font-bold text-2xl mt-[-220px] ml-[-276px]'>COMPANY</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500  ml-[370px] mt-[47px] text-2xl'/>
          <div className='hover:underline mt-[-25px] ml-[-300px] text-x'>About us</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500  ml-[370px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-25px] ml-[-290px] text-x'>Our Experts</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500  ml-[370px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-25px] ml-[-260px] text-x'>Services & Price</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500  ml-[370px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-25px] ml-[-280px] text-x'>Latest News</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500  ml-[370px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-25px] ml-[-270px] text-x'>Support Center</div>

          <div className='font-bold text-2xl mt-[-234PX] ml-52'>CUSTOMERS</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[600px] mt-12 text-2xl'/>
          <div className='hover:underline mt-[-25px] ml-[170px] text-x'>Contact Us</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[600px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-24px] ml-[200px] text-x'>Payment & Tax</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[600px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-24px] ml-[180px] text-x'>Bonus Point</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[600px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-24px] ml-[190px] text-x'>Supply Chain</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[600px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-24px] ml-[200px] text-x'>Student Discont</div>

          <div className='font-bold text-2xl mt-[-240px] ml-[650px]'>SUPPORT</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[836px] mt-12 text-2xl'/>
          <div className='hover:underline mt-[-25px] ml-[660px] text-x'>Shipping Info</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[836px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-24px] ml-[620px] text-x'>Returns</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[836px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-24px] ml-[620px] text-x'>Refund</div>
          <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[836px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-24px] ml-[660px] text-x'>How To Order </div>
          <MdOutlineKeyboardArrowRight className='text-gray-500 ml-[836px] mt-[10px] text-2xl'/>
          <div className='hover:underline mt-[-24px] ml-[660px] text-x'>How To Track</div>

          <div className='font-bold text-2xl ml-[-1030px] mt-[120px]'>SOCIAL</div>
          <FaFacebookF className='text-gray-500 mt-10 ml-3 text-x'/>
          <div className='hover:underline mr-[990px] -mt-4  text-x'>Facebook</div>
          <TiSocialTwitter className='text-gray-500 mt-4 ml-2 text-xl' />
          <div className='hover:underline mr-[1000px] -mt-6  text-x'>Twitter</div>
          <FaInstagram className='text-gray-500 mt-4 ml-2'/>
          <div className='hover:underline mr-[1000px] -mt-5  text-x'>Instagram</div>
          <FaPinterest className='text-gray-500 mt-4 ml-2'/>
          <div className='hover:underline mr-[1000px] -mt-5  text-x'>Pinterest</div>
          <IoLogoYoutube className='text-gray-500 ml-2 mt-5'/>
          <div className='hover:underline mr-[1000px] -mt-5  text-x'>Youtube</div>       
       </div>
         <div className='bg-gray-300 h-0.5 w-full mt-20 '></div>
         <img className='mt-7' src="./src/assets/asset 2.svg" alt="" />
         <h1 className='-mt-5'>©2024 Kidify. All rights reserved</h1>
         <img className='ml-[930px] -mt-12' src="./src/assets/asset 46.svg" alt="" />
         <img className='ml-[980px] -mt-8' src="./src/assets/asset 47.svg" alt="" />
         <img className='ml-[1030px] -mt-8' src="./src/assets/asset 48.svg" alt="" />
         <img className='ml-[1080px] -mt-8' src="./src/assets/asset 49.svg" alt="" />
         <img className='ml-[1080px] -mt-8' src="./src/assets/asset 49.svg" alt="" />
         <img className='ml-[1080px] mt-1' src="./src/assets/asset 50.svg" alt="" />
 */}

           
    </div> 
    </>     
  )
}

export default Wishlist1
