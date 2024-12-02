

 export class ReturnObject {
    constructor(returnCode, returnMessage, returnData) {
        this.returnCode = returnCode
        this.returnMessage = returnMessage
        this.returnData = returnData
    }

    convertToObject() {
        return {
            returnCode: this.returnCode,
            returnMessage: this.returnMessage,
            returnData: this.returnData
        }
    }

    sendResponse(res) {
        res.status(200).json(this.convertToObject())
    }





}





