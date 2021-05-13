const express = require('express')
const router = express.Router()

const usersRouter = require('./userRouter/index')

router.use('/users', usersRouter)

router.get(
  '/test', (req,res,next) =>{
    res.send('hihi')
  }
)

module.exports = router