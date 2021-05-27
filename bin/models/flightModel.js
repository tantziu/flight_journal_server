"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from 'mongoose';
const mongoose_1 = require("mongoose");
const FlightSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    aircraft: {
        type: String
    }
});
const Flight = mongoose_1.model('Flight', FlightSchema);
exports.default = Flight;
