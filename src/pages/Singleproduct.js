/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react'
import './Singleproduct.css'
import { useParams } from 'react-router-dom'

import {FaStar,FaRegStar,FaPlus, FaMinus} from 'react-icons/fa'

import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'


import {newArrivalsData ,topProducts ,personalArray ,dropShip,globalProducts,trueView} from '../components/product/Productdata'
import { useStateValue } from '../context/StateProvider'

const arrayOfProduct = newArrivalsData.concat(topProducts,personalArray,dropShip,globalProducts,trueView)

const getLocalItems = () =>{
    let list = localStorage.getItem('lists');
    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return []
    }
}


const Singleproduct = () => {
    const {id} = useParams();
    const [{basket},dispatch] = useStateValue();
    const [counter, setCounter] = useState(0)

    const newArr = arrayOfProduct.filter((p)=>p.id==id)

    const [items, setItems] = useState(newArr[0] || getLocalItems())

    const addToBasket = () =>{
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                image:image,
                price:price,
                name:name,
            },
        });
    };

    const removeHandler = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }

    const increaseHandler =() =>{
       setCounter(counter+1)
    }
    const decreaseHandler = () =>{
        if(counter>0){
            setCounter(counter-1)
        }
        else{
            setCounter(0)
        }
    }

    const callDouble = () =>{
        increaseHandler();
        addToBasket();
    }

    const decreaseDouble = () =>{
        removeHandler();
        decreaseHandler();
    }

    useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(items))
    },[items])

    const {name,image,rating,des,price} = items;

    const tempRet = 5+rating-5;

    return (
        <div className="container">
            <div className="path">
                <div className="pathContainer">
                <Link exact to="/">Home</Link>
                <p>/</p>
                <Link exact to={`/products/${id}`}>
                    {name}
                </Link>
                </div>
            </div>
            <div className="singleWrapper">
            {/* <p>{id}</p> */}
            <div className="imgDiv">
            <img src={image} alt=""/> 
            <div className="ratingContainer">
            <div className="positive">{
                Array(tempRet).fill().map((_,i)=>(
                    <p>
                        <FaStar/>
                    </p>
                ))
                }
            </div>
            <div className="negative">
            {
                Array(5-rating).fill().map((_,i)=>(
                    <p>
                        <FaRegStar/>
                    </p>
                ))
                }
            </div>
            </div>
            <p className="price">Price : ${price}</p>
            {/* <p>{tempRet}</p> */}
            {/* <button onClick={addToBasket}>Add To Cart</button> */}
            <div className="iconButton">
                <button onClick={callDouble} >
                    <FaPlus/>
                </button>
                <button onClick={decreaseDouble}>
                    <FaMinus/>
                </button>
                <div className="items">
                <h2>items : {counter}</h2>
                </div>
            </div>
            </div>
            
            <div className="desDiv">
            <h3>{name}</h3>
            <p>{des}</p>
            </div>
            </div>
            
        </div>
    )
}

export default Singleproduct
