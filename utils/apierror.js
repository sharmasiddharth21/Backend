class ApiError extends Error{
    constructor(
        statusCode,
        message ="Something went wrong",
        error=[],
        statck = "",


    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success= false;
        this.errors = errors


        if (statck) {
            this.statck =statck 
        }else{
            Error.captureStackTrack(this,this.constructor)
        }
    }
}

export {ApiError}