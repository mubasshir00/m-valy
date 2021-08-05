import React from 'react'
import Card from '../card/Card'
import './Product.css'
import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'

import {newArrivalsData ,topProducts ,personalArray ,dropShip,globalProducts,trueView} from './Productdata'
// import Random from '../../Random'

const Product = () => {
    return (
        <>
           <div className="productContainer">
           <div className="productWrapper">
            
            <div className="productHolderContainer">
            <div className="title">
                    <img src="/icon1.png" alt="" className="iconImg"/>
                    <p>New Arrivals</p>
            </div>
            <div className="productHolder">
               {
                   newArrivalsData.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link to={`/products/${id}`}>
                               <img src={image} alt=""/>
                               <p>BDT {price}</p>
                               <p className="greyFont">Trending Now</p>
                           </Link>
                       )
                   })
               }
               </div>
            </div>


               <div className="productHolderContainer">
               <div className="title">
                    <img src="/icon2.png" alt="" className="iconImg"/>
                    <p>Top-ranked Products</p>
               </div>
               <div className="productHolder">
               {
                   topProducts.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link to={`/products/${id}`} >
                               <img src={image} alt="" />
                               <p>BDT {price}</p>
                               <p className="greyFont">Trending Now</p>
                           </Link>
                       )
                   })
               }
               </div>
               </div>
              
              <div className="productHolderContainer">
              <div className="title">
                    <img src="/icon3.png" alt="" className="iconImg"/>
                    <p>Personal Protective Equipment</p>
               </div>
              <div className="productHolder">
               {
                   personalArray.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link to={`/products/${id}`}>
                               <img src={image} alt="" />
                               <p>BDT {price}</p>
                               <p className="greyFont">Trending Now</p>
                           </Link>
                       )
                   })
               }
               </div>                  
              </div>

              <div className="productHolderContainer">
              <div className="title">
                    <img src="/icon3.png" alt="" className="iconImg"/>
                    <p>Dropshipping</p>
               </div>
              <div className="productHolder">
               {
                   dropShip.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link to={`/products/${id}`}>
                               <img src={image} alt=""/>
                               <p>BDT {price}</p>
                               <p></p>
                           </Link>
                       )
                   })
               }
               </div>                  
              </div>

              <div className="productHolderContainer">
              <div className="title">
                    <img src="/icon4.jpg" alt="" className="iconImg"/>
                    <p> Global Original Sources</p>
               </div>
              <div className="productHolder">
               {
                   globalProducts.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link to={`/products/${id}`}>
                               <img src={image} alt=""/>
                               <p>BDT {price}</p>
                               <p></p>
                           </Link>
                       )
                   })
               }
               </div>                  
              </div>

              <div className="productHolderContainer">
              <div className="title">
                    <img src="/icon5.png" alt="" className="iconImg"/>
                    <p> True View</p>
               </div>
              <div className="productHolder">
               {
                   trueView.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link to={`/products/${id}`}>
                               <img src={image} alt=""/>
                               <p>BDT {price}</p>
                               <p></p>
                           </Link>
                       )
                   })
               }
               </div>                  
              </div>

           </div>
        </div>
        </>
    )
}

export default Product
