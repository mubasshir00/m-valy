import React, { useState } from 'react'
import './Login.css'
import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'

const Login = () => {
    const [dynamicClass, setdynamicClass] = useState("");

    const clickHandler = () =>{
        setdynamicClass("flip")
        // setdynamicClass("")
    }
    const clickHandlerLogin = () =>{
        setdynamicClass("backflip")
    }
    
    return (
        <div className="flip-container">
  <div className={`flipper ${dynamicClass}`} id="flipper">
    <div className="front">
      <h1 className="title">Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="button" defaultValue="Login" />
      </form>
      <Link className="flipbutton" id="loginButton" onClick={clickHandler} >Create my account →</Link>
    </div>
    <div className="back">
      <h1 className="title">Register</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="button" defaultValue="Sign up" />
      </form>
      <Link className="flipbutton" id="registerButton" onClick={clickHandlerLogin} >Login to my account →</Link>
      
    </div>
  </div>
</div>

    )
}
export default Login
