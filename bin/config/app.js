"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./connect"));
// import * as routes from '../routes/index';
const flightRoutes_1 = __importDefault(require("../routes/flightRoutes"));
const body_parser_1 = require("body-parser");
// import methodOverride from 'method-override';
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.mongoUrl = "mongodb://localhost:27017/flights";
        this.app = express_1.default();
        this.config();
        this.mongoSetup();
        // DataBase.connect();
    }
    config() {
        this.app.use(body_parser_1.json());
        this.app.use(body_parser_1.urlencoded({ extended: true }));
        // this.app.use(methodOverride('_method'));
        this.app.use(cors_1.default());
        this.app.use("/api/v1/flights", flightRoutes_1.default);
        this.app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
    }
    mongoSetup() {
        connect_1.default(this.mongoUrl);
    }
}
exports.default = new App().app;
