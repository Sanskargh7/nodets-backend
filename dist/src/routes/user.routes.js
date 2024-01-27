"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
class UserRoute {
    constructor() {
        this.path = '/users';
        this.router = (0, express_1.Router)();
        this.userController = new user_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        //fetch all users
        this.router.get(`${this.path}`, this.userController.getUsers);
        //fetch user
        this.router.get(`${this.path}/:id`, this.userController.getUser);
        //create user info
        this.router.post(`${this.path}/create-user`, this.userController.createUser);
        //delete user from table
        this.router.post(`${this.path}/:id`, this.userController.deleteUser);
    }
}
exports.default = UserRoute;
