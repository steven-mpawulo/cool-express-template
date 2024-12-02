const { ReturnObject } = require("../../../utils/returnObject")
const signUp = require("../../actions/auth/signUp")

const authService = (action, params, req, res) => {
    let response = new ReturnObject()
    // we will register our service actions here
    switch(action) {
        case "signUp":
            signUp(req, res, params)
        default:
            response.returnCode = 100
            response.returnMessage = "Action not known"
            return response.sendResponse(res)

    }
}



module.exports = authService