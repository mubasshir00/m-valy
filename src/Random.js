import React from 'react'

const Random = () => {
    return (
        <div>
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
                    <span className="optionOne">Hello, Sign In</span>
                        <span>Accounts & Lists</span>
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
    )
}

export default Random
