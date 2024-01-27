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
const bcrypt_1 = require("bcrypt");
const HttpExceptions_1 = require("../exceptions/HttpExceptions");
const users_model_1 = __importDefault(require("../models/users.model"));
class UserService {
    constructor() {
        this.users = users_model_1.default;
    }
    /**
 * Retrieves all users from the database.
 * @returns {Promise<User[]>} A promise that resolves to an array of User objects.
 */
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.users.find();
            return users;
        });
    }
    /**
 * Finds a user by their ID.
 * @param {string} userId - The ID of the user to find.
 * @returns {Promise<User | null>} - A promise that resolves to the found user or null if not found.
 * @throws {HttpExceptions} - Throws a HttpExceptions with a 404 status code and an error message if the user ID is empty or if the user does not exist.
 */
    findUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userId) {
                throw new HttpExceptions_1.HttpExceptions(404, 'User Id is Empty');
            }
            const findUser = yield this.users.findOne({ _id: userId });
            if (!findUser) {
                throw new HttpExceptions_1.HttpExceptions(404, 'User Does not exits');
            }
            return findUser;
        });
    }
    /**
 * Creates a new user.
 * @param {CreateUserDto} userData - The data of the user to be created.
 * @returns {Promise<User | null>} - The created user data or null if user creation fails.
 * @throws {HttpExceptions} - Throws an exception if the user already exists.
 */
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const findUser = yield this.users.findOne({ email: userData.email });
            if (findUser) {
                throw new HttpExceptions_1.HttpExceptions(400, `${findUser.email} Already Exists`);
            }
            const hashedPassword = yield (0, bcrypt_1.hash)(userData.password, 10);
            const CreateUserData = yield this.users.create(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
            return CreateUserData;
        });
    }
    /**
 * Update a user with the given user ID and user data.
 * @param {string} userId - The ID of the user to update.
 * @param {CreateUserDto} userData - The data to update the user with.
 * @returns {Promise<User | null>} - The updated user, or null if the user does not exist.
 * @throws {HttpExceptions} - If the user does not exist or if there is an error updating the user.
 */
    updateUser(userId, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExistUser = yield this.users.findById({ _id: userId });
            if (!isExistUser) {
                throw new HttpExceptions_1.HttpExceptions(400, `${userId} Not Found!`);
            }
            if (userData.password) {
                const hashedPassword = yield (0, bcrypt_1.hash)(userData.password, 10);
                userData = Object.assign(Object.assign({}, userData), { password: hashedPassword });
            }
            const updatedUser = yield this.users.findByIdAndUpdate(userId, { userData });
            if (!updatedUser) {
                throw new HttpExceptions_1.HttpExceptions(400, 'User does not exists');
            }
            return updatedUser;
        });
    }
    /**
     * Deletes a user by their ID.
     * @param {string} userId - The ID of the user to delete.
     * @returns {Promise<User | null>} - A promise that resolves to the deleted user or null if the user does not exist.
     * @throws {HttpExceptions} - Throws a HttpExceptions with a status code of 400 and a message of 'user not exists' if the user does not exist.
     */
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteUser = yield this.users.findByIdAndDelete(userId);
            if (!deleteUser) {
                throw new HttpExceptions_1.HttpExceptions(400, 'user not exists');
            }
            return deleteUser;
        });
    }
}
exports.default = UserService;
