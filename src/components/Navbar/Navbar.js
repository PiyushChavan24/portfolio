import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import {Link} from 'react-scroll';
import Menu from '../../assets/menu.png';  
const  Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className="Navbar">
      <img src={logo} alt='it just the logo' className='logo'/>
        <div className='desktopMenu'>
            <Link  activeClass='active' to="intro" spy={true}smooth={true}
            offset={-100} duration={500}className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to="skills" spy={true}smooth={true}
            offset={-50} duration={500}className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to="works" spy={true}smooth={true}
            offset={-50} duration={500}className='desktopMenuListItem'>Portfolio</Link>
            <Link activeClass='active' to="clients" spy={true}smooth={true}
            offset={-50} duration={500}className='desktopMenuListItem'>Clients</Link>

        </div>
      <button className='desktopMenuBtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
            <img src={contact} alt=' contact image' className='desktopMenuImg'/>Contact me
      </button>
      <img src={Menu} alt='it just the logo' className='mobMenu' onClick={()=>{
              setShowMenu(!showMenu)
            }}/>
        <div className='navMenu' style={{display: showMenu ? 'flex':'none'}}>
            <Link  activeClass='active' to="intro" spy={true}smooth={true}
            offset={-100} duration={500}className='listItem'onClick={()=>{
              setShowMenu(false)
            }}>Home</Link>
            <Link activeClass='active' to="skills" spy={true}smooth={true}
            offset={-50} duration={500}className='listItem'onClick={()=>{
              setShowMenu(false)
            }}>About</Link>
            <Link activeClass='active' to="works" spy={true}smooth={true}
            offset={-50} duration={500}className='listItem'onClick={()=>{
              setShowMenu(false)
            }}>Portfolio</Link>
            <Link activeClass='active' to="clients" spy={true}smooth={true}
            offset={-50} duration={500}className='listItem'onClick={()=>{
              setShowMenu(false)
            }}>Clients</Link>
            <Link activeClass='active' to="contact" spy={true}smooth={true}
            offset={-50} duration={500}className='listItem'onClick={()=>{
              setShowMenu(false)
            }}>Contact</Link>

        </div>
    </nav>  
  )
}

export default Navbar;
