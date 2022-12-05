import { StatusCodes } from "http-status-codes"

class BadRequestError extends Error{
    constructor(message){
        super(message)
        this.statuscode=StatusCodes.BAD_REQUEST
    }
}

export default BadRequestError