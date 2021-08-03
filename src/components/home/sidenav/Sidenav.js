import React from 'react'
import './Sidenav.css'
import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'

import sideImg from './Dataside'

const Sidenav = () => {
    return (
        <Router>
        <div>
            <div className="sidebarContentContainer">
                <h3>MY MARKET</h3>
                {
                    sideImg.map((item)=>{
                        const {id ,image,name} = item
                        return(
                            <Link to="">
                            <div className="sideMenu">
                                <img src={image} alt="" className="sideImage"/>
                                <p>{name}</p>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        </Router>
    )
}

export default Sidenav
