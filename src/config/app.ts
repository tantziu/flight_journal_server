import express from 'express';
import connect from './connect';
// import * as routes from '../routes/index';
import flightsRoutes from '../routes/flightRoutes';
import {json, urlencoded} from 'body-parser';
// import methodOverride from 'method-override';
import cors from 'cors';

class App {
    public app:express.Application;
    public mongoUrl:string = "mongodb://localhost:27017/flights";
    
    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        // DataBase.connect();
    }

    private config():void {
        this.app.use(json());
        this.app.use(urlencoded({ extended : true}));
        // this.app.use(methodOverride('_method'));
        this.app.use(cors())
        this.app.use("/api/v1/flights", flightsRoutes);
        this.app.use("*", (req:any, res:any) => res.status(404).json({ error: "not found"}))

    }

    private mongoSetup():void {
        connect(this.mongoUrl);

    }
}
export default new App().app;