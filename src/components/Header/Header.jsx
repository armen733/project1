import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShopping } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { MdHome } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

import "./Header.css"

const Header = () => {
  return (
      <header>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJMX8iAYOV6o_8Kje_zksickkqFL_IdLZglA&usqp=CAU" 
            />
        </div>
        <nav>
            <NavLink to="/"><button>Home <MdHome /></button></NavLink>
            <NavLink to="/products"><button>Products<AiFillProduct /></button></NavLink>
            <NavLink to="/basket"><button>Basket <AiOutlineShopping/></button></NavLink>
            <NavLink to="#"><button> Contact <FaPhone /></button></NavLink>
            <NavLink to="/signin"><button className='signin'>Sign In <FaRegUser /></button></NavLink>
            <NavLink to="/signup"><button className='signup'>Sign Up <TiUserAdd /></button></NavLink>
            <NavLink></NavLink>
        </nav>
      </header>
  )
}

export default Header
