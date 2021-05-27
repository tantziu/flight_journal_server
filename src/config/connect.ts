import mongoose from 'mongoose';

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

export default (db: string) => {
    const connect = async () => {
        await mongoose
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
    };
    connect();

    // mongoose.connection.on("disconnected", connect);
}