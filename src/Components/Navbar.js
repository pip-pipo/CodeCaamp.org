import React from 'react'
import { AiFillGithub,AiFillCode,AiOutlineInstagram } from 'react-icons/ai';
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
    return (
        <nav className="navbar shadow">
        <div className="nav__first">
        <img width="100px" height="100px" src="https://res.cloudinary.com/codecaamp/image/upload/v1610815124/Purple_Modern_Technology_Gaming_Logo_mciavh.png" alt=""/>
        </div>
        <div className="nav__middle">
        <div>
        <BiSearch size="40px" />
        </div>
        <input placeholder="Search" className="form-control shadow-none" type="search" name="search" id="Search"/>
        </div>
        <div className="nav__last">
        <AiOutlineInstagram className="icon" size="40px"/>
        <AiFillGithub className="icon"  size="40px" />
        <AiFillCode className="icon"  size="40px" />
        </div>
        </nav>
    )
}

export default Navbar
