import React, { useEffect, useState } from 'react'
import './Singleproduct.css'
import { useParams } from 'react-router-dom'

import {FaStar,FaRegStar} from 'react-icons/fa'

import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'


import {newArrivalsData ,topProducts ,personalArray ,dropShip,globalProducts,trueView} from '../components/product/Productdata'

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
   
    const newArr = arrayOfProduct.filter((p)=>p.id==id)

    const [items, setItems] = useState(newArr[0] || getLocalItems())

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
            <button type="submit">Add To Cart</button>
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
