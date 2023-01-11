<h1 align="center">Cuban-cuex</h1>
<h5 align="center">A package to get data about the cuban currency exchange in real time. CUP, MLC, USD.</h5>


## Installation
`npm install cuban-cuex`

## Easy to use
```js
import cuex from 'cuban-cuex'
const UsdPrice = cuex.UsdPrice
const EurPrice = cuex.EurPrice
```
### If you do console.log(cuex) you can see all the data that you can request from this package
```js
{
  EurPrice: '170.00',
  UsdPrice: '165.00',
  MlcPrice: '162.00',
  CadPrice: '120.00',
  CalculationDate: '1/11/2023, 3:32:52 PM'
}
```