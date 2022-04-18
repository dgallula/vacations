import  express  from "express";
import generalSettings from "../config.js";
import vacationsBl from "../bl/vacations-bl.js";

const vacationsRouter = express.Router()


vacationsRouter.get(`${generalSettings.baseUrl}/vacations`, async (_, res) => {
    let result = await vacationsBl.getAll();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export default vacationsRouter