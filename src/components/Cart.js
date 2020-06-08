import React, {useContext, useState} from "react"
import {Context} from "../ContextProvider"
import CartItem from "./CartItem"

function Cart() {

    console.log("Cart")

    const {cartArray, emptyCart} = useContext(Context)
    const [orderButtonText, setOrderButtonText] = useState("Place Order")

    const cartDisplayItems = cartArray.map(element => 
        <CartItem key={element.id} imageDetails={element} />)

    const totalCost = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      }).format(cartArray.length * 5.99)

    function orderClick() {

        setOrderButtonText ("Please wait.... processing your order")

        setTimeout(() => {
                emptyCart()
                }
            ,3000)
    }

    function cartPageDisplay() {
        if(cartArray.length > 0) {
            return   <div className="order-button">
                        <button onClick={orderClick}>{orderButtonText}</button>
                    </div>}
        else {
            return <h1>There are no items in your cart</h1>
        }
    }


    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartDisplayItems}
            <p className="total-cost">Total Cost : {totalCost} </p>
            {cartPageDisplay()}
        </main>
    )
}



export default Cart