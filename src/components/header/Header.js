import React from 'react'
import logo from './images/PinClipart.com_barber-clippers-clipart_576184.png'
import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'
import {FaSearch , FaShoppingCart} from 'react-icons/fa'
import './Cartbutton.css'
import './Header.css'
const Header = () => {
    return (
        <>
        <Router>
        <div className="header">
            <Link to="/">
                <img className="logo" src={ logo } alt="" />
            </Link>

            <div>
                <div></div>
                <div className="headerOption">
                    <span className="optionOne">Deliver To</span>
                    <span>Bangladesh</span>
                </div>
            </div>

            <div className="header_search">
                <input className="inputBox" type="text" name="" id="" />
                <FaSearch className="searchIcon" />
            </div>

            <div className="headerNav">
                    <div className="headerOption">
                        {/* <img className="flagImage" src={usaflag} alt="" /> */}
                    </div>
                <div className="headerOption">
                    <span className="optionOne">Hello, Sign In</span>
                        <span>Accounts & Lists</span>
                    </div>
                <div className="headerOption">
                    <span className="optionOne">Returns</span>
                        <span>& Orders</span>
                </div>

                <Link className="link" to="/checkout">
                <div className="cartBtnWrapper">
                   <Link className="cartBtn" to="/cart">
                   Cart
                   <span className="cartContainer">
                       <FaShoppingCart className="cartIcon"/>
                       <span className="cartValue">
                           10
                       </span>
                   </span>
                   </Link>
               </div>
                </Link>


            </div>
        </div>
        </Router>
        {/* <div className="cartBtnWrapper">
                   <Link className="cartBtn" to="/cart">
                   Cart
                   <span className="cartContainer">
                       <FaShoppingCart/>
                       <span className="cartValue">
                           10
                       </span>
                   </span>
                   </Link>
               </div> */}
        </>
    )
}

export default Header


