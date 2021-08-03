import React from 'react'
import Card from '../card/Card'
import './Product.css'
import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'

import {newArrivalsData ,topProducts ,personalArray ,dropShip,globalProducts,trueView} from './Productdata'
// import Random from '../../Random'

const Product = () => {
    return (
        <Router>
           <div className="productContainer">
           <div className="productWrapper">
            
            <div className="productHolderContainer">
            <div className="title">
                    <img src="/icon1.png" alt=""/>
                    <p>New Arrivals</p>
            </div>
            <div className="productHolder">
               {
                   newArrivalsData.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link>
                               <img src={image} alt=""/>
                               <p>BDT {price}</p>
                               <p>Trending Now</p>
                           </Link>
                       )
                   })
               }
               </div>
            </div>


               <div className="productHolderContainer">
               <div className="title">
                    <img src="/icon2.png" alt=""/>
                    <p>Top-ranked Products</p>
               </div>
               <div className="productHolder">
               {
                   topProducts.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link>
                               <img src={image} alt=""/>
                               <p>BDT {price}</p>
                               <p>Trending Now</p>
                           </Link>
                       )
                   })
               }
               </div>
               </div>
              
              <div className="productHolderContainer">
              <div className="title">
                    <img src="/icon3.png" alt=""/>
                    <p>Personal Protective Equipment</p>
               </div>
              <div className="productHolder">
               {
                   personalArray.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link>
                               <img src={image} alt=""/>
                               <p>BDT {price}</p>
                               <p>Trending Now</p>
                           </Link>
                       )
                   })
               }
               </div>                  
              </div>

              <div className="productHolderContainer">
              <div className="title">
                    <img src="/icon3.png" alt=""/>
                    <p>Dropshipping</p>
               </div>
              <div className="productHolder">
               {
                   dropShip.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link>
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
                    <img src="/icon4.jpg" alt=""/>
                    <p> Global Original Sources</p>
               </div>
              <div className="productHolder">
               {
                   globalProducts.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link>
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
                    <img src="/icon5.png" alt=""/>
                    <p> True View</p>
               </div>
              <div className="productHolder">
               {
                   trueView.map((item)=>{
                       const {id,image,price} = item;
                       return(
                           <Link>
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
        </Router>
    )
}

export default Product
