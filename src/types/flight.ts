import {Document} from 'mongoose';

export interface IFlight extends Document{
    name: String;
    destination:String;
    origin: String;
    date: String;
    aircraft?: String;
};
