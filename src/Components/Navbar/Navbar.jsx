import React, { useState } from 'react'
import './Navbar.css'
import logo from "../Assests/logo.png"
import card_logo from "../Assests/cart_icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu flex items-center list-none gap-5 text-gray-600 ">
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        {/* <li></li> */}
      </ul>
      <div className="nav-login-card flex items-center gap-10">
      <Link to='/login'><button className=' outline-none border '>Login</button></Link> 
       <Link to='/cart'><img src={card_logo} alt="" /></Link> 
        <div className="nav-cart-count w-4 h-4 flex justify-center items-center ">0</div>
      </div>
    </div>
  )
}

export default Navbar
