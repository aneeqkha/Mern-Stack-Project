import { StatusCodes } from "http-status-codes"

class Unauthorized extends Error{
    constructor(message){
        super(message)
        this.statuscode=StatusCodes.UNAUTHORIZED
    }
}

export default Unauthorized