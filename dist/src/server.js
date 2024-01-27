"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = new App_1.default([new user_routes_1.default()]);
app.listen();
