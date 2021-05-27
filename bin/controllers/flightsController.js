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
exports.deleteFlight = exports.updateFlight = exports.addFlight = exports.getFlightById = exports.getFlights = exports.home = void 0;
const flightModel_1 = __importDefault(require("../models/flightModel"));
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
const home = (request, response) => {
    response.render('index', { title: 'Home' });
};
exports.home = home;
const getFlights = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const flights = yield flightModel_1.default.find();
        // const flights = [
        //     {id: 1,name: "LX1498", destination: "ZRH", origin: "PRG", aircraft: "", date:"09.04.2020", duration:80},
        //     {id: 2,name: "LX2098", destination: "PRG", origin: "ZRH", aircraft: "", date:"13.04.2020", duration:95}
        //   ]
        res.status(200).json({ flights });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
        // console.log(error);
        // throw error;
    }
});
exports.getFlights = getFlights;
const getFlightById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const flight = yield flightModel_1.default.findById(req.params.id);
        res.status(200).json({ flight });
    }
    catch (error) {
        throw error;
    }
});
exports.getFlightById = getFlightById;
const addFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const flight = new flightModel_1.default({
            name: req.body.name,
            destination: req.body.destination,
            origin: req.body.origin,
            date: req.body.date
        });
        const newFlight = yield flight.save();
        const allFlights = yield flightModel_1.default.find();
        res.status(201).json({
            message: "Flight added",
            flight: newFlight,
            flights: allFlights
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addFlight = addFlight;
const updateFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body } = req;
        const updatedFlight = yield flightModel_1.default.findOneAndUpdate({ _id: id }, body, { new: true });
        const allFlights = yield flightModel_1.default.find();
        res.status(200).json({
            message: "Flight updated",
            flight: updatedFlight,
            flights: allFlights
        });
    }
    catch (error) {
        // throw error
        res.status(400).json({
            status: 'error',
            error: 'req body cannot be empty',
        });
    }
});
exports.updateFlight = updateFlight;
const deleteFlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const deletedFlight:IFlight| null = await Flight.findOneAndRemove(
        //     req.params.id
        // );
        const deletedFlight = yield flightModel_1.default.findByIdAndRemove(req.params.id);
        const allFlights = yield flightModel_1.default.find();
        res.status(200).json({
            message: "FLight deleted",
            flight: deletedFlight,
            flights: allFlights
        });
    }
    catch (error) {
        // throw error
        res.status(400).json({
            status: 'error',
            error: 'req body cannot be empty',
        });
    }
});
exports.deleteFlight = deleteFlight;
// export class FlightsController {
//     public get_flight(req:any, res:any) {
//     }
// }
