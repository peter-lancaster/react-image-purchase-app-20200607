import React, {useContext} from "react"
import useHover from "../utils/useHover"
import {Context} from "../ContextProvider"

function PhotoItem({imageDetails, className}) {

    const {favoriteToggle} = useContext(Context)

    const {hovered, hoverTarget} = useHover()
    
    function addToBasketIcon () {
        if(hovered) {
           return <i className="ri-add-circle-line cart"></i>
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