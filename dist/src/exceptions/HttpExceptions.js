"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptions = void 0;
class HttpExceptions extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
exports.HttpExceptions = HttpExceptions;
