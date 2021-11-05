import React from 'react';
import './Header.css';
import { FiSearch, FiHome, FiHeart } from 'react-icons/fi';
import { AiFillHome, AiFillCompass, AiFillHeart } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import { RiMessengerLine, RiMessengerFill } from 'react-icons/ri';
import { IoCompassOutline } from 'react-icons/io5';

function Header() {
    const location = useLocation();
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
                </div>
                <div className="header__search">
                    <div className="header__searchbar">
                        <FiSearch/>
                        <input type="text"  placeholder="Search"/>
                    </div>
                </div>
                <ul className="header__collection">
                    <li className="header__item">
                         <NavLink to="/">
                            {
                               location.pathname === "/" ? <AiFillHome/> : <FiHome/>
                            }
                         </NavLink>
                    </li>
                    <li className="header__item">
                         <NavLink to="/messenger">
                            {
                               location.pathname === "/messenger" ? <RiMessengerFill/> : <RiMessengerLine />
                            }
                         </NavLink>
                    </li>
                    <li className="header__item">
                         <NavLink to="/compass">
                             {
                                 location.pathname === "/compass" ?  <AiFillCompass/> : <IoCompassOutline />  
                             } 
                         </NavLink>
                    </li>         

                    <li className="header__item">
                         <NavLink to="/like">
                             {
                                 location.pathname === "/like" ?  <AiFillHeart/> : <FiHeart />
                             }
                         </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
