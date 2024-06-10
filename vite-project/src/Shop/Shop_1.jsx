// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// export default function BasicSelect() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }


import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import Footer_1 from '../Wishlist/Footer_1';


const Shop_1 = () => {
  return (
    <div>
        <div className='container-fluid absolute'>
          <h1 className='absolute text-4xl font-medium mt-20'>Baby Clothing</h1>
          <h1 className='absolute mt-32  text-purple-400'>Home  </h1>
           <MdOutlineKeyboardArrowRight className='text-gray-500 absolute mt-[130px] ml-11 text-2xl'/>
          <h1 className=' text-gray-600 absolute mt-32 ml-[70px]'>shop</h1>
              <div className='absolute text-xs flex  justify-around pt-[200px]'>
                <h1 className='p-2 bg-white rounded-full border-solid border-black hover:bg-indigo-300 '>Activity & Gear</h1>
                <h1 className='p-2 ml-3 bg-white rounded-full border-solid  border-black hover:bg-indigo-300'>Baby Care</h1>
                <h1 className='p-2 ml-3 bg-white rounded-full border-solid border-black  hover:bg-indigo-300'>Baby Comfort</h1>
                <h1 className='p-2 ml-3 bg-white rounded-full border-solid border-black  hover:bg-indigo-300'>Baby shoes</h1>
                <h1 className='p-2 ml-3 bg-white rounded-full border-solid border-black  hover:bg-indigo-300'>Boy's Clothing</h1>
                <h1 className='p-2 ml-3 bg-white rounded-full border-solid border-black  hover:bg-indigo-300'>Family Outfits</h1>
              </div>

           <div className='flex absolute mt-60 text-xs '>
                 <h1 className='p-2 bg-white rounded-full border-solid border-black  hover:bg-indigo-300'>Fashion Hub</h1>
                   <h1 className='p-2 ml-4 bg-white rounded-full border-solid border-black  hover:bg-indigo-300'>Fashion Trends</h1>
            </div>
        <img className='  bg-cover' src='./src/assets/shop_bg.png ' width=""></img>

         <div className='ml-[-990px] mt-16 text-3xl font-semibold'>Filter</div>
         <div className='ml-[-700px] -mt-5 text-xs'>Clear</div>
         <div className='h-[1px] w-[250px] ml-16 bg-slate-300'></div>
         {/* <div className='ml-[-990px] mt-6 font-semibold'>Categories</div> */}



         {/* <div className='ml-[-300px] mt-[-70px] text-xs'>Showing 1–9 of 79 results</div>
         <div className='h-[1px] w-[]'></div> */}

         

        </div>    
    </div>
  )
}

export default Shop_1

