const {StatusCodes} = require('http-status-codes')
const BaseError = require("./base.error");


class NotImplemented extends BaseError{
    constructor(methodName){
        super('Not Implemented',StatusCodes.NOT_FOUND,`${methodName} is not implemented`,{});
    }
}

module.exports = NotImplemented;