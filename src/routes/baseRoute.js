const express = require('express')
const { ReturnObject } = require('../../utils/returnObject')
const baseController = require('../controllers/baseController')
const verifyToken = require('../middleware/verifyToken')
const baseRoute = express.Router()

/* 
this houses our two http methods
the get method for checking on server availability
and the post method which handles all our requests
initially all requests are authenticated with jwt tokens except for auth service request
we can configure this behavior and do anything we want to the request before 
it is handled by the base controller
funny, we also have one controller 
*/
baseRoute.get('/v1', (req, res) => {
    let response = new ReturnObject(0, "pong")
   return response.sendResponse(res)
})

baseRoute.post('/v1', verifyToken, baseController)

module.exports = baseRoute
