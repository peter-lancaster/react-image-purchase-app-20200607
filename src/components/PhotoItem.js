import React from "react"

function PhotoItem({imageDetails}) {




    return(
        <div>
            <img src={imageDetails.url} alt="" />
        </div>
    )

}

export default PhotoItem