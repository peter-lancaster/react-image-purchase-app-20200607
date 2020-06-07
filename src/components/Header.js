import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../ContextProvider"

function Header() {

    console.log("Header")

    const {cartArray} = useContext(Context)

    
    return (
        <header>
            <Link to="/"><h1>Image Purchasing App</h1></Link>
            <Link to="/cart"><i className={
                cartArray.length > 0 
                    ? "ri-shopping-cart-fill ri-3x" 
                    : "ri-shopping-cart-line ri-3x"}>
                </i></Link>
        </header>)
}

export default Header