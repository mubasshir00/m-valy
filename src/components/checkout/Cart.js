import React from 'react'
import { useStateValue } from '../../context/StateProvider'

const Cart = ({id,name,image,price}) => {
    // const [{basket},dispatch] = useStateValue();
    // const {id,name,image} = basket;
    // console.log(name);
    return (
        <div>
        <img src={image} alt=""/>
        <p>{name}</p>
        <h2>{price}</h2>
        </div>
    )
}

export default Cart
