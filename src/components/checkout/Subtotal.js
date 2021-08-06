import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider'
import './Subtotal.css'
const Subtotal = () => {
    const [{basket},dispatch] = useStateValue();

    return (
        <div className="subtotalContainer">
            <div className="subtotalWrapper">
                 <CurrencyFormat
                renderText = {(value)=>(
                    <>
                    <h3>SubTotal ( {basket.length} items) : <strong>{value}</strong> </h3>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                 />
                 <div className="box">
                 <input type="checkbox" name="" value=""/>
                 <p>This Order Contains a gift</p>
                 </div>
                 <button type="submit">Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Subtotal
