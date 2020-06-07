import React from "react"
import {Link} from "react-router-dom"

function Header() {

    console.log("Header")
    return (
        <header>
            <Link to="/"><h1>Image Purchasing App</h1></Link>
            <Link to="/cart"><i className="ri-shopping-cart-line ri-3x"></i></Link>
        </header>)
}

export default Header