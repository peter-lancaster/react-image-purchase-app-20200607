import React, {useContext} from "react" 
import {Context} from "../ContextProvider"
import useHover from "../utils/useHover"

function CartItem({imageDetails}) {

    console.log("CartItem")

    const {cartToggle, favoriteToggle} = useContext(Context)
    const {hovered, hoverTarget} = useHover()


    function binIconDisplay() {
        if(hovered) {
            return <i onClick={() => cartToggle(imageDetails)} ref={hoverTarget} className="ri-delete-bin-fill"></i>
        } else {
            return <i ref={hoverTarget} className="ri-delete-bin-line"></i>
        }
    }

    
    return(<div className="cart-item">
            {binIconDisplay()}
            <img src={imageDetails.url} alt="" width="230px" />
            <p>$5.99</p>
        </div>
        )
        


}

export default CartItem