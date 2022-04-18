import express  from 'express'
import cors from 'cors'
import generalSettings from './config.js'
import followersRouter from './controllers/followers-controllers.js';
import usersRouter from './controllers/users-controller.js';
import vacationsRouter from './controllers/vacations-controllers.js';


const app = express();

app.use(express.json())
app.use(cors())

 app.use('/',followersRouter)
 app.use('/', usersRouter)
 app.use('/', vacationsRouter)



console.log(`Server is runnig on port ${generalSettings.port} `)
app.listen(generalSettings.port)