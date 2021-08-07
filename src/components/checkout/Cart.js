import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import './Cart.css'
const Cart = ({id,name,image,price}) => {
    const [{basket},dispatch] = useStateValue();
    const removeHandler = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="cartProductHolder">
        <img src={image} alt=""/>
        <p>{name}</p>
        <h2>$ {price}</h2>
        <button onClick={removeHandler} >Remove From Basket</button>
        </div>
    )
}

export default Cart
