import React from 'react'
import './Static/Sidebar.css'
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
const Sidebar = () => {

    const Close =()=>{
        const btnClose = document.querySelector('.sideBar');
        console.log(btnClose);
        btnClose.style='display:none'
        // const menuData = document.querySelector('#menu');
    }

    const menu =()=>{
        const btnClose = document.querySelector('.sideBar');
        console.log(btnClose);
        btnClose.style='display:""';
        
    }


    return (<div>
        <AiOutlineMenu onClick={menu} className=" menu__style" id="menu" size="35px" />
        <div className="sideBar shadow">
            <div className="sideBase__menuClose">
                <AiOutlineCloseCircle onClick={Close} id="btn_close" size="35px" className="close_item" />
            </div>
            <div className="sideBar__menu_item">
                <ul>
                    <li><>Home</></li>
                    <li><>About</></li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li> Sign Up</li>
                    <li>Log in</li>
                </ul>

            </div>
        </div>
        </div>
    )
}

export default Sidebar
