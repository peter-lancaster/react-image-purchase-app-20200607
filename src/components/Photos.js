import React, {useContext} from "react"
import {Context} from "../ContextProvider"
import PhotoItem from "./PhotoItem"

function Photos() {

    console.log("Photos")

    const {imageArray} = useContext(Context)

    const displayImages = imageArray.map(element => {
        return(<PhotoItem key={element.url} imageDetails={element} />)
    })


    return (
        <div>
            {displayImages}
        </div>
    )
}


export default Photos