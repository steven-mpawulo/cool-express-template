const { ReturnObject } = require("../../../utils/returnObject")
const jwt = require('jsonwebtoken')
require('dotenv').config()

// modify this to your custom implementation
const signUp = (req, res, params) => {
    let data = {
        "id": '1'
    }
    let token = jwt.sign(data, process.env.SECRET_KEY, {expiresIn : 60 * 60 * 60})
    let response = new ReturnObject(0, "user created", {
        ...params,
        token
        
    })

   return  response.sendResponse(res)
    
}

module.exports = signUp