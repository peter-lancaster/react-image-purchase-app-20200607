import React, {useState, useEffect} from "react"
const Context = React.createContext()


function ContextProvider({children}) {

    console.log("ContextProvider")
    const [imageArray, setImageArray] = useState([])
    const [cartArray, setCartArray] = useState([])

    function favoriteToggle(imageId) {
        const newImageArray = imageArray.map(element => {
                    if(element.id === imageId) {
                        return {...element, isFavorite : !element.isFavorite}
                    } else {
                        return element
                    }
                }
            )
        setImageArray(newImageArray)
    }

    function cartToggle(imageDetails) {

        const isAlreadyInCart = cartArray.some(element => element.id === imageDetails.id)

        let newCartArray = []

        if (isAlreadyInCart) {
            newCartArray = cartArray.filter(element => element.id !== imageDetails.id)
            } else {
            newCartArray = cartArray.concat(imageDetails)
        }

        setCartArray(newCartArray)

    }

    function imageFetch() {

        console.log("imageFetch")

        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(response => response.json())
        .then(data => setImageArray(data))
        .catch(error => console.error(error))
    }


    useEffect(() => imageFetch(),[])

    return(
        <Context.Provider value={{imageArray, favoriteToggle, cartArray, cartToggle}}>
            {children}
        </Context.Provider>
    )
}




export {ContextProvider, Context}