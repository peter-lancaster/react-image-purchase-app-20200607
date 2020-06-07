import {useState, useRef, useEffect} from "react" 

function useHover() {

    const [hovered, setHover] = useState(false)
    const hoverTarget = useRef(null)

    function mouseEntered() {
        setHover(true)
    }

    function mouseLeft() {
        setHover(false)
    }

    useEffect( () => {
        hoverTarget.current.addEventListener("mouseenter", mouseEntered)
        hoverTarget.current.addEventListener("mouseleave", mouseLeft)
    }
        ,[])

    return {hovered, hoverTarget}

}




export default useHover