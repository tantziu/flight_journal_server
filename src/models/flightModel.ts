// import * as mongoose from 'mongoose';
import {model, Schema} from 'mongoose';
import {IFlight} from '../types/flight'

const FlightSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    destination: {
        type:String,
        required: true
    },
    origin: {
        type:String,
        required: true
    },
    date: {
        type:String,
        required: true
    },
    aircraft : {
        type: String
    }
});

const Flight = model<IFlight>('Flight', FlightSchema);

export default Flight;

