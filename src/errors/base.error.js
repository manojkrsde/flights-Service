

class BaseError extends Error {

    constructor(name, statusCode, message, details) {

        super(message);
        this.name = name;
        this.message = message;
        this.details = details;

    }
}

module.exports = BaseError;