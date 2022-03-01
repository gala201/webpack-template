function polygonArea (polygonArray) {

    let count = 0;

    for(let i = 0; i < polygonArray.length; i++){
        count += polygonArray[i]
    }

    return count
}

export { polygonArea }