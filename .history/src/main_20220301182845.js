import { add } from './modules/add'
import { opsegKruga } from './modules/opsegKruga';
import { polygonArea } from './modules/polygonArea'

// const numbersAdd = add(2, 3)

const r = 3;
const opseg = opsegKruga(r)

//const polygonArray = [4, 6, 3, 6, 7, 8]
//const polygonAreaLocal = polygonArea(polygonArray)

document.body.innerText = opseg