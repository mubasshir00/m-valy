import React from 'react'
import logo from './images/PinClipart.com_barber-clippers-clipart_576184.png'
import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'
import {FaSearch , FaShoppingCart ,FaBars} from 'react-icons/fa'
import './Cartbutton.css'
import './Header.css'
import { useStateValue } from '../../context/StateProvider'
import { auth } from '../../firebase';

const Header = () => {
    const [{basket ,user},dispatch] = useStateValue();
    // console.log(basket);
    const handleAuth = () =>{
        if(user){
            auth.signOut();
        }
    }
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
                <div 
                onClick={handleAuth}
                className="loginInHeader">
                    <Link to={!user && '/login'}>
                    <span>
                        Hello {user?.email.split('@')[0]}
                    </span>
                        <span>
                        {user ? 'Sign Out' : 'Sign In'}</span>
                        </Link>
                    {/* <Link to="/login">
                        {user ? '' : 'Sign Up'}
                    </Link> */}
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
                           {basket?.length}
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


