const { ReturnObject } = require("../../utils/returnObject")
const authService = require("../services/auth/authService")


/*
our only controller where all the magic happens.
we shall register our services here
from now on 
you only need to create a service and also define its actions
then come and add it here
don't worry, your actions can also be reused in multipe services
this is JS rememeber😅

Enjoy
Created with love by Steven Mpawulo😎
Inspired by the MoonLight Architecture
Big Up
 */

const baseController = (req, res) => {
    let response = new ReturnObject()
    
    try {
        let { service, action, params } = req.body

        if (!service) {
            response.returnCode = 100
            response.returnMessage = "Please provide a service"
            return response.sendResponse(res)
        }

        if (!action) {
            response.returnCode = 100
            response.returnMessage = "Please provide an action"
            return response.sendResponse(res)
        }


        // we will register our services here
        switch (service) {
            case "auth":
                authService(action, params, req, res)

            default:
                response.returnCode = 100
                response.returnMessage = "Service not known"
                return response.sendResponse(res)
        }
    } catch (e) {
        response.returnCode = 400
        response.returnMessage = e.message
        return response.sendResponse(res)
    }


}

module.exports = baseController