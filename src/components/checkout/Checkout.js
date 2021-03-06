import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import Cart from './Cart'
import './Checkout.css'
import Subtotal from './Subtotal'
const Checkout = () => {
    const [{ basket,user }, dispatch] = useStateValue();

    return (
        <div className="checkoutContainer">
            <div className="checkoutWrapper">
            <div className="cartWrapper">
            <h2>Your Shopping List</h2>
            <hr/>
            <h2>Hello {user?.email.split('@')[0]}</h2>

            <div className="cartItemsContainer">
            {
                basket.map(item=>
                    <Cart
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        />    
                    )
            }
            </div>
            </div>
            <Subtotal/>

            </div>
        </div>
    )
}

export default Checkout
