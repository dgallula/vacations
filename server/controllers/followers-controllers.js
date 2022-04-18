import  express  from "express";
import generalSettings from "../config.js";
import followersBl from "../bl/followers-bl.js";

const followersRouter = express.Router()


followersRouter.get(`${generalSettings.baseUrl}/followers`, async (_, res) => {
    let result = await followersBl.getAll();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export default followersRouter