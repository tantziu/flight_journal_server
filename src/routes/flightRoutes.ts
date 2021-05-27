import {Router} from 'express';
import {
    home, 
    getFlights, 
    getFlightById, 
    addFlight, 
    updateFlight, 
    deleteFlight
} from '../controllers/flightsController';
// export function index(request:express.Request, response:express.Response) {
//     response.send('Well done!Hi');
// }

class FlightRoutes {
    public router:Router = Router();

    // router.route("/").get(RestaurantsCtrl.apiGetRestaurants)
    constructor() {
        this.router.get('/', getFlights)
        this.router.get('/id/:id', getFlightById)
            .post('/add-flight', addFlight)
            .put('/update-flight/:id', updateFlight)
            .delete('/delete-flight/:id', deleteFlight);
    }
}

export default new FlightRoutes().router;
// const router:Router = Router();

// router.get('/', home)
//     .get('/flights', getFlights)
//     .get('/flights/:id', getFlightById)
//     .post('/add-flight', addFlight)
//     .put('/update-flight/:id', updateFlight)
//     .delete('/delete-flight/:id', deleteFlight)

// export default router