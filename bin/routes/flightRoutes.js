"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const flightsController_1 = require("../controllers/flightsController");
// export function index(request:express.Request, response:express.Response) {
//     response.send('Well done!Hi');
// }
class FlightRoutes {
    // router.route("/").get(RestaurantsCtrl.apiGetRestaurants)
    constructor() {
        this.router = express_1.Router();
        this.router.get('/', flightsController_1.getFlights);
        this.router.get('/id/:id', flightsController_1.getFlightById)
            .post('/add-flight', flightsController_1.addFlight)
            .put('/update-flight/:id', flightsController_1.updateFlight)
            .delete('/delete-flight/:id', flightsController_1.deleteFlight);
    }
}
exports.default = new FlightRoutes().router;
// const router:Router = Router();
// router.get('/', home)
//     .get('/flights', getFlights)
//     .get('/flights/:id', getFlightById)
//     .post('/add-flight', addFlight)
//     .put('/update-flight/:id', updateFlight)
//     .delete('/delete-flight/:id', deleteFlight)
// export default router
