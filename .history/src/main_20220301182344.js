import { add } from './modules/add'
import { polygonArea } from './modules/polygonArea'

// const numbersAdd = add(2, 3)

const polygonArray = [4, 6, 3, 6, 7, 8]

const polygonAreaLocal = polygonArea(polygonArray)

document.body.innerText = polygonAreaLocal