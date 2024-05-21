import { SqliteError } from "../deps.ts";

enum Status {
    FATAL,
    NORMAL
}

abstract class BaseError {
    data
    status: Status
    constructor(status: Status, data: any) {
        this.data = data;
        this.status = status;
    }
}

abstract class StringError extends BaseError {

    constructor(msg: string) {
        super(Status.NORMAL, {
            msg
        })
    }
}

class DatabaseError extends BaseError {
    constructor(data: SqliteError) {
        super(Status.FATAL, data);
    }
}

class LoginError extends StringError {
    constructor(msg: string) {
        super(msg)
    }
}