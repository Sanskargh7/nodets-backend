"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpExceptions_1 = require("../exceptions/HttpExceptions");
const user_services_1 = __importDefault(require("../services/user.services"));
class UsersControllers {
    constructor() {
        this.userService = new user_services_1.default();
        this.getUsers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const findAllUsersData = yield this.userService.findAllUsers();
                res.status(200).json({ data: findAllUsersData, message: "findAll" });
            }
            catch (error) {
                next(error);
            }
        });
        this.getUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const findUserData = yield this.userService.findUser(userId);
                if (findUserData === null) {
                    throw new HttpExceptions_1.HttpExceptions(400, 'User Not Found');
                }
                res.status(200).json({ data: findUserData, message: "find user" });
            }
            catch (error) {
                next(error);
            }
        });
        this.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userData = req.body;
                console.log(req.body);
                const createUser = yield this.userService.createUser(userData);
                res.status(201).json({ data: createUser, message: "User created successfully" });
            }
            catch (error) {
                next(error);
            }
        });
        this.updateUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const userData = req.body;
                const updateUserData = yield this.userService.updateUser(userId, userData);
                res.status(200).json({ data: updateUserData, message: "User Updated" });
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const deletedUser = yield this.userService.deleteUser(userId);
                res.status(200).json({ data: deletedUser, message: "user is deleted!" });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = UsersControllers;
