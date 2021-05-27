// import express from 'express';
// import * as http from 'http';
// import connect from './config/connect';
// import {Server, Path, GET, PathParam} from "typescript-rest";
// import * as routes from './routes/index';
// import flightsRoutes from './routes';
// import {json, urlencoded} from 'body-parser';
import dotenv from "dotenv"
// import methodOverride from 'method-override';
// import cors from 'cors';
import app from './config/app';

dotenv.config()

const port:number | string = process.env.PORT || 8000;
// const  db = "mongodb://localhost:27017/flights";
// connect(db)

app.set('port', port)
// // Server.buildServices(app);


// // app.use(methodOverride('_method'));
// // app.use(cors())
// app.use(flightsRoutes);

app.listen(port, () => {
    console.log('Server is running on on port 4000!');
})

// http.createServer(app).listen(app.get('port'), () => {
// 	console.log('Express server listening on port ' + app.get('port'));
// });

