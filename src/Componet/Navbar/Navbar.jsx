import React from 'react';
import './Navbar.css';
import { FaShoppingCart, FaUser} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import logo from "../../Images/logo.jpeg";

const Navbar = () => { 
  return (
    <>
    <nav className='main-nav'>
      <div className='logo'>
        <img src={logo} alt="" style={{height:'2.5rem', width:'5rem', borderRadius:'5rem'}} />
      </div>
      <div className='search-items'>
          <input placeholder='Search items' />
          <p className='search-icon'><CiSearch/></p>
          
      </div>
      <div className='menu-items'>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">SWEET</a>
          </li>
          <li>
            <a href="#">CHOCOLATES</a>
          </li>
          <li>
            <a href="#">BAKERIES</a>
          </li>
          <li>
            <a href="#">FOODS</a>
          </li>
        </ul>
      </div>
      <div className='social-media'>
        <ul className='social-media-desktop'>
          <li>
            <a href="https://www.w3schools.com/mysql/default.asp" target='_sweet'><FaShoppingCart/></a>
          </li>
          <li>
            <a href="https://www.w3schools.com/mysql/default.asp" target='_sweet'><FaUser/></a>
          </li>
        </ul>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar