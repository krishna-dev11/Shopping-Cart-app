import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Redux/Slices/ShoppingcartSlice';
const Singleitem = ({item}) => {

    const [Readmore,setreadmore] = useState(false);
    const [cartremoveaddbutton,setcartbutton] = useState(false);
    const dispatch = useDispatch();
   
  return (
    <div className='h-[25rem] w-[15rem]  overflow-hidden border-[2px] rounded-md border-black px-6 py-4  flex flex-col items-center justify-around '>

      <div className=' text-[1rem] font-bold'>{item.title.substring(0,15)}...</div>

      
      <div className='  text-[.6rem] opacity-70 '>{Readmore ? (item.description) : (item.description.substring(0,70))} ... <span c onClick={()=>{setreadmore(!Readmore)}} className='  text-[.4rem] cursor-pointer text-blue-500'>{Readmore ? "Show Less" : "Read More"}</span></div>
      
      
      <img src={item.image} className='w-[9rem]'/>

      <div className='flex justify-between gap-10'>
        <div className=' text-[.9rem] font-bold text-green-800'>${item.price}</div>
        <button  className='border-[3px] border-black  px-3 py-1 rounded-2xl text-[.5rem] opacity-60 text-black font-semibold' onClick={()=>{
          setcartbutton(!cartremoveaddbutton)
          dispatch(add(item))
        }} >{cartremoveaddbutton ? "REMOVE ITEM" : "ADD TO CART"}</button>
      </div>

    </div>

  )
}

export default Singleitem