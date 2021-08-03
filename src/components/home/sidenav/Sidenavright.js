import React from 'react'
import './Sidenavright.css'
import rightSideArray from './Datarightside'
import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'

const Sidenavright = () => {
    return (
        <Router>
            <div className="sideRightNavContainer">
                <Link to="" className="btn heading">
                Diwali Preparation Sale
                </Link>
            {
               rightSideArray.map((item)=>{
                   const {id,image,name} =  item;
                   return(
                       <div className="rightWrapper">
                           <div className="rightTitle">
                           <p>{name}</p>
                           <Link to="" className="btn source">
                               Source Now
                           </Link>
                           </div>
                           <div className="rightImg">
                           <img src={image} alt=""/>
                           </div>
                       </div>
                   )
               }) 
            }
        </div>
        </Router>
    )
}

export default Sidenavright
