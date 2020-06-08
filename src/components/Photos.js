import React, {useContext} from "react"
import {Context} from "../ContextProvider"
import PhotoItem from "./PhotoItem"
import generateImageSize from "../utils/generateImageSize"

function Photos() {

    console.log("Photos")

    const {imageArray} = useContext(Context)

    const displayImages = imageArray.map(element => {
        return(<PhotoItem key={element.id} imageDetails={element} className={generateImageSize(element.id)} />)
    })

    return (
        <main className="photos">
            {displayImages}
        </main>
    )
}


export default Photos