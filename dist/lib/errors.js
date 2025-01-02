"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cusError = cusError;
exports.catchError = catchError;
function cusError(status, { message, errors }) {
    throw {
        status,
        message,
        errors
    };
}
function catchError(err, next) {
    if (err.status) {
        next(err);
        return;
    }
    else {
        next({
            status: 500,
            message: "Sorry, something went wrong"
        });
    }
}
