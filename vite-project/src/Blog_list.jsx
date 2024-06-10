import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Blog_list = () => {
  return (

    <section className='cantainer'>
      <div className='cantainer '>

        <div class="container-fluid absolute ">
          <h1 className="absolute font-bold text-5xl font-serif  neutral-900 p-20">Our Blog</h1>
          <div className='absolute p-24 mt-8 flex'>
            <span className='  text-lg  text-purple-400'>Home </span>
            <MdKeyboardArrowRight className='text-inline mt-2' />
            <span className='text-lg  text-purple-400'>Blog </span>
            <MdKeyboardArrowRight className='text-inline mt-2' />
            <span className='text-lg '>Page 2 </span>
          </div>
          <img src='./src/assets/img.jpg' className='bg-cover bg-[#eef9ff] '></img>
        </div>
      </div>

    </section>












  )
}

export default Blog_list