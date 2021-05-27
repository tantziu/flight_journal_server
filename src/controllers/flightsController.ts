// import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';
import Flight from '../models/flightModel'
import {IFlight} from '../types/flight';

// export class FlightsRoutes extends CommonRoutesConfig {
//     constructor(app: express.Application) {
//         super(app, 'FlightsRoutes');
//     }

//     configureRoutes() {
//         this.app.route(`/flights`)
//             .get((req:express.Request, res:express.Response) => {
//                 res.status(200).send(`List of flights`);
//             })
//             // .post(())
//         return this.app;
//     }
// }
export const home = (request: express.Request, response: express.Response) => {
	response.render('index', { title: 'Home'});
};

export const getFlights = async(req:express.Request, res:express.Response):(Promise<void>) => {
    try {
        const flights:IFlight[] = await Flight.find();
        // const flights = [
        //     {id: 1,name: "LX1498", destination: "ZRH", origin: "PRG", aircraft: "", date:"09.04.2020", duration:80},
        //     {id: 2,name: "LX2098", destination: "PRG", origin: "ZRH", aircraft: "", date:"13.04.2020", duration:95}
        //   ]
        res.status(200).json({flights});
    } catch (error) {
        res.status(400).send({message:error.message})
        // console.log(error);
        // throw error;
    }
}

export const getFlightById = async(req:express.Request, res:express.Response):(Promise<void>) => {
    try {
        const flight:IFlight | null = await Flight.findById(req.params.id);
        res.status(200).json({flight});
    } catch (error) {
        throw error;
    }
}


export const addFlight = async (req:express.Request, res:express.Response):Promise<void> => {
    try {
        const flight:IFlight = new Flight({
            name: req.body.name,
            destination: req.body.destination,
            origin: req.body.origin,
            date: req.body.date
        });

        const newFlight:IFlight = await flight.save();
        const allFlights:IFlight[] = await Flight.find();
        res.status(201).json({
            message: "Flight added", 
            flight:newFlight, 
            flights:allFlights
        })
    } catch(error) {
        throw error
    }
}

export const updateFlight = async (req:express.Request, res:express.Response):Promise<void> => {
    try {
        const {params: {id}, body} = req;
        const updatedFlight:IFlight| null = await Flight.findOneAndUpdate(
            {_id :id},
            body,
            {new: true}
        );
        const allFlights:IFlight[] = await Flight.find();
        res.status(200).json({
            message: "Flight updated",
            flight: updatedFlight,
            flights: allFlights
        })
    } catch(error) {
        // throw error
       res.status(400).json({
            status: 'error',
            error: 'req body cannot be empty',
          });
    }
}

export const deleteFlight = async (req:express.Request, res:express.Response):Promise<void> => {
    try {
        // const deletedFlight:IFlight| null = await Flight.findOneAndRemove(
        //     req.params.id
        // );
        const deletedFlight:IFlight| null = await Flight.findByIdAndRemove(
            req.params.id
        );
        const allFlights:IFlight[] = await Flight.find();
        res.status(200).json({
            message: "FLight deleted",
            flight: deletedFlight,
            flights: allFlights
        })
    } catch(error) {
        // throw error
       res.status(400).json({
            status: 'error',
            error: 'req body cannot be empty',
          });
    }
}

// export class FlightsController {
//     public get_flight(req:any, res:any) {

//     }
// }
