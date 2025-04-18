import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.DisplayShopItem);
  return (
    <div className='h-[8%] w-full bg-blue-950 flex justify-between items-center '>

         <NavLink to="/">
          <img src="../logo.png" className='w-[8rem] ml-5'/>
         </NavLink>

         <div className='flex gap-6 mr-5'>
            <NavLink to="/">
             <p className='text-white'>Home</p>
            </NavLink>
            <NavLink to="/cart" className="relative">
             <FaShoppingCart className="text-2xl " color='white'/>  
             {totalQuantity > 0 && (
               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                 {totalQuantity}
               </span>
             )}
            </NavLink>
         </div>
    </div>
  )
}

export default Navbar