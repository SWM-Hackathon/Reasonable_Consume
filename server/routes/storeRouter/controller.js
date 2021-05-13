const data = require('./data')

exports.getStoreAll = async (req, res, next) => {
  try {
      const item = data['DATA'];
      res.send(item);
  }
  catch(error) {
      next(error);
  }
}

exports.getStoreDetail = async (req, res, next) => {
    try {
        const detail = data['DATA'][req.body.id]
        res.send(detail)
    }
    catch(error){
        next(error);
    }
}