const jwt = require('jsonwebtoken')
const { ReturnObject } = require('../../utils/returnObject')
require('dotenv').config()

const verifyToken = (req, res, next) => {
    let response = new ReturnObject()

    let { service } = req.body
    if (service === "auth") {
        return next()
    }

    if (!req.headers.authorization) {
        response.returnCode = 100
        response.returnMessage = "Please provide authorization token"
        return response.sendResponse(res)
    }

    let token = req.headers.authorization.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
        if (err) {
            console.log(err)
            response.returnCode = 100
            response.returnMessage = err.message
            return response.sendResponse(res)
        }
        req.user = data
        return next()
    })

}

module.exports = verifyToken