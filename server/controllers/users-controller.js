import  express  from "express";
import generalSettings from "../config.js";
 import usersBl from "../bl/users-bl.js";

const usersRouter = express.Router()


usersRouter.get(`${generalSettings.baseUrl}/users`, async (_, res) => {
    let result = await usersBl.getAll();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export default usersRouter