import React, {useContext} from "react" 
import {Context} from "../ContextProvider"
import useHover from "../utils/useHover"

function CartItem({item}) {

    console.log("CartItem")

    const {cartArray} = useContext(Context)
    const {hovered, hoverTarget} = useHover()

    function binIconDisplay() {

        if(hovered) {
            return <i ref={hoverTarget} class="ri-delete-bin-fill"></i>
        } else {
            return <i ref={hoverTarget} class="ri-delete-bin-line"></i>
        }
    }


    return(<div className="cart-item">
        {binIconDisplay()}
        <img src={item.url} alt="" width="230px" />
        <p>$5.99</p>
        </div>




        )
        


}

export default CartItem