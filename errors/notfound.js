import { StatusCodes } from "http-status-codes"

class NotFoundError extends Error{
    constructor(message){
        super(message)
        this.statuscode=StatusCodes.NOT_FOUND
    }
}

export default NotFoundError