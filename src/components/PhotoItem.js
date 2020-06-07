import React, {useContext} from "react"
import useHover from "../utils/useHover"
import {Context} from "../ContextProvider"

function PhotoItem({imageDetails, className}) {

    console.log("PhotoItem")

    const {favoriteToggle, cartToggle, cartArray} = useContext(Context)

    const {hovered, hoverTarget} = useHover()
    
    function addToBasketIcon () {

        const isImageAlreadyInBasket = cartArray.some(element => element.id === imageDetails.id)

        if (isImageAlreadyInBasket) {
            return <i onClick={() => cartToggle(imageDetails)} className="ri-shopping-cart-fill cart"></i>
        } else if (hovered) {
           return <i onClick={() => cartToggle(imageDetails)} className="ri-add-circle-line cart"></i>
        }
    }

    function favoriteIcon () {
        if (imageDetails.isFavorite) {
            return <i onClick={() => favoriteToggle(imageDetails.id)} className="ri-heart-fill favorite"></i>
        } 
        else if(hovered) {
           return <i onClick={() => favoriteToggle(imageDetails.id)} className="ri-heart-line favorite"></i>
        }
    }

    return(
        <div ref={hoverTarget} className={`${className} image-container`} >
            <img src={imageDetails.url} alt="" className="image-grid"/>
            {favoriteIcon()}
            {addToBasketIcon()}
        </div>
    )

}

export default PhotoItem