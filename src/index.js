import request from 'request-promise-native';
import * as cheerio from 'cheerio';

const result = await request('https://eltoque.com/')
class CubanExchange{
    constructor(result){
        const $ = cheerio.load(result)
        const TablePrices = $('.content').find('tbody tr').text()
        this.EurPrice = TablePrices.split('EUR')[1].split(' CUP')[0]
        this.UsdPrice = TablePrices.split('USD')[1].split(' CUP')[0]
        this.MlcPrice = TablePrices.split('MLC')[1].split(' CUP')[0]
        this.CadPrice = TablePrices.split('CAD')[1].split(' CUP')[0]
        this.CalculationDate = new Date(parseInt($('.content time').map((i, x) => $(x).attr('datetime')).toArray()[0])).toLocaleString()
    }
}
const cubanExchangeObj = new CubanExchange(result)
export default {
    ...cubanExchangeObj
}