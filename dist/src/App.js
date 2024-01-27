"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const mongoose_1 = require("mongoose");
class App {
    constructor(routes) {
        this.MONGODB_URI = 'mongodb+srv://gaurav:3gANONaT61B5g4RP@cluster0.94qn5u5.mongodb.net/assessment_db_dev';
        this.app = (0, express_1.default)();
        this.port = 3000;
        this.env = 'Production';
        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Backend with typescript is started successfully  " + this.port);
        });
    }
    connectToDatabase() {
        if (this.env === 'Production') {
            (0, mongoose_1.connect)(this.MONGODB_URI).then(() => {
                console.log('database is connected');
            }).catch((error) => console.log(error));
        }
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    }
    //initialize middlewares
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use((0, cors_1.default)());
        // this.app.use(morgan());
    }
}
exports.default = App;
