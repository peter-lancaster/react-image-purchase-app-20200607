function generateImageSize(inputNum) {
    if(inputNum % 5 === 0) {
        return "big"
    } else if (inputNum % 6 === 0) {
        return "tall"
    } else {
        return "wide"
    }
}

export default generateImageSize