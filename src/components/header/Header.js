import React from 'react'
import logo from './images/PinClipart.com_barber-clippers-clipart_576184.png'
import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'
import {FaSearch , FaShoppingCart ,FaBars} from 'react-icons/fa'
import './Cartbutton.css'
import './Header.css'
import { useProductsContext } from '../../context/products_context'
const Header = () => {
    const {isSidebarOpen,closeSidebar} = useProductsContext();
    
    return (
        <>
        <div className="header">
        <Link to="/">
                <img className="logo" src={ logo } alt="" />
            </Link>

            <div className="headerOption">
                <span className="optionOne">Deliver To</span>
                <span>Bangladesh</span>
            </div>

            <div className="header_search">
                <input className="inputBox" type="text" name="" id="" />
                <FaSearch className="searchIcon" />
            </div>

            <div className="headerNav">
                <div className="headerOption">
                    <Link to="/" className="optionOne">Hello, Sign In</Link>
                    <Link>Accounts & Lists</Link>
                </div>
                <div className="headerOption">
                    <span className="optionOne">Returns</span>
                        <span>& Orders</span>
                </div>

                <Link className="link" to="/checkout">
                <div className="cartBtnWrapper">
                   <div className="cartBtn" to="/cart">
                   Cart
                   <span className="cartContainer">
                       <FaShoppingCart className="cartIcon"/>
                       <span className="cartValue">
                           10
                       </span>
                   </span>
                   </div>
               </div>
                </Link>

                <button type="button" className="nav-toggle">
                    <FaBars/>
                </button>

            </div>
        </div>
        </>
    )
}

export default Header


