"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
// import * as http from 'http';
// import connect from './config/connect';
// import {Server, Path, GET, PathParam} from "typescript-rest";
// import * as routes from './routes/index';
// import flightsRoutes from './routes';
// import {json, urlencoded} from 'body-parser';
const dotenv_1 = __importDefault(require("dotenv"));
// import methodOverride from 'method-override';
// import cors from 'cors';
const app_1 = __importDefault(require("./config/app"));
dotenv_1.default.config();
const port = process.env.PORT || 8000;
// const  db = "mongodb://localhost:27017/flights";
// connect(db)
app_1.default.set('port', port);
// // Server.buildServices(app);
// // app.use(methodOverride('_method'));
// // app.use(cors())
// app.use(flightsRoutes);
app_1.default.listen(port, () => {
    console.log('Server is running on on port 4000!');
});
// http.createServer(app).listen(app.get('port'), () => {
// 	console.log('Express server listening on port ' + app.get('port'));
// });
