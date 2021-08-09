import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'
import Singleproduct from './pages/Singleproduct';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{},dispatch]= useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS',authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])

  return (
    <Router >
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
        <Route exact path="/products/:id" >
           {/* children={<Singleproduct/>} */}
           <Singleproduct/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
