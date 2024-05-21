import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShopping } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";

import "./Header.css"

const Header = () => {
  return (
      <header>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJMX8iAYOV6o_8Kje_zksickkqFL_IdLZglA&usqp=CAU" 
            />
        </div>
        <nav>
            <NavLink to="/"><button>Home</button></NavLink>
            <NavLink to="/products"><button>Products</button></NavLink>
            <NavLink to="*"><button><AiOutlineShopping className='c' /></button></NavLink>
            <NavLink to="#"><button><FaPhone /></button></NavLink>
        </nav>
      </header>
  )
}

export default Header
