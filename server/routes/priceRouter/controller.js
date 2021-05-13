const GU_DATA = require('./data/json/GU_DATA.json')
const MARKET_DATA = require('./data/json/MARKET_DATA.json')
const PRICE_DATA = require('./data/json/PRICE_DATA.json')

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
    const items = []
    res.send(items)
  }
  catch(error){
      next(error);
  }
}

exports.getPriceByGu = async (req, res, next) => {
  try {
    const items = []
    res.send(items)
  }
  catch(error){
      next(error);
  }
}