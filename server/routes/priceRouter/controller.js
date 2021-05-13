const GU_DATA = require('./data/json/GU_DATA.json')
const MARKET_DATA = require('./data/json/MARKET_DATA.json')
const PRICE_DATA = require('./data/json/PRICE_DATA.json')
const AVERAGE_DATA = require('./data/json/AVERAGE_DATA.json')

exports.getGuCode = async (req, res, next) => {
  try {
      const items = GU_DATA['DATA']
      res.send(items)
  }
  catch(error){
      next(error);
  }
}

exports.getMarket = async (req, res, next) => {
  try {
      const items = MARKET_DATA['DATA']
      res.send(items)
  }
  catch(error){
      next(error);
  }
}

exports.getPriceAll = async (req, res, next) => {
  try {
      const items = PRICE_DATA['DATA']
      res.send(items)
  }
  catch(error){
      next(error);
  }
}

exports.getPriceAverage = async (req, res, next) => {
  try {
    const items = AVERAGE_DATA['DATA']
    res.send(items)
  }
  catch(error){
      next(error);
  }
}

exports.getPriceByGu = async (req, res, next) => {
  try {
    const items = PRICE_DATA['DATA']
    const guCode = req.params.guCode
    const data = items.filter((item) => {
      if(item.gu_code == guCode){
        return item
      }
    })
    res.send(data)
  }
  catch(error){
      next(error);
  }
}