import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import {Link} from 'react-scroll';

const  Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt='it just the logo' className='logo'/>
        <div className='desktopMenu'>
            <Link to="" className='desktopMenuListItem'>Home</Link>
            <Link to=""className='desktopMenuListItem'>About</Link>
            <Link to=""className='desktopMenuListItem'>Portfolio</Link>
            <Link to=""className='desktopMenuListItem'>Clients</Link>

        </div>
      <button className='desktopMenuBtn'>
            <img src={contact} alt=' contact image' className='desktopMenuImg'/>Contact me
      </button>
    </nav>  
  )
}

export default Navbar;
