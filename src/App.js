import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {BrowserRouter as Router , Switch,Route,Link} from 'react-router-dom'
import Singleproduct from './pages/Singleproduct';
import Checkout from './components/checkout/Checkout';

function App() {
  return (
    <Router>
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

      </Switch>
    </Router>
  );
}

export default App;
