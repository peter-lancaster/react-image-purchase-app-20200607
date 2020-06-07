import React, {useContext} from "react"
import {Context} from "../ContextProvider"
import CartItem from "./CartItem"

function Cart() {

    console.log("Cart")

    const {cartArray} = useContext(Context)

    const cartDisplayItems = cartArray.map(element => 
        <CartItem key={element.id} item={element} />)


    return(
        <main className="cart-page">
            {cartDisplayItems}
            <p >Total Cost :  </p>
            <div>
                <button>Place Order</button>
            </div>
        </main>
    )
}



export default Cart