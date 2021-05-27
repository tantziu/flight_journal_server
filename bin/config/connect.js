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
const mongoose_1 = __importDefault(require("mongoose"));
// export class DataBase {
//     private db:string = "mongodb://localhost:27017/flights";
//     public static async connect() {
//         await mongoose
//             .connect(this.db, {
//                 useNewUrlParser: true, 
//                 useUnifiedTopology: true,
//                 useFindAndModify: false,
//                 useCreateIndex: true
//         });
//     }
//     public static async closeCon() {
//         return mongoose.connection.close(true);
//     }
// }
exports.default = (db) => {
    const connect = () => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default
            .connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
            .then(() => {
            return console.log(`Successfully connected to ${db}`);
        })
            .catch(error => {
            console.log("Error connecting to database: ", error);
            return process.exit(1);
        });
    });
    connect();
    // mongoose.connection.on("disconnected", connect);
};
