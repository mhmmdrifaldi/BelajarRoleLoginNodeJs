import 'dotenv/config'
import express from "express";
import cors from "cors";
import compress from "compression";
import helmet from "helmet";
import session from 'express-session'
import models,{sequelize} from "./models/init-models";
import routes from './routes/IndexRoute'
import { dataSequelize } from './config/config-db'
import SequelizeStore from 'connect-session-sequelize'

const port = process.env.PORT || 3000;
const app = express()

const sessionStore = SequelizeStore(session.Store)

const store = new sessionStore({
	db: dataSequelize
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.use(compress())
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	store: store,
	cookie: {
		secure: 'auto'
	}
}))
app.use(cors({
	credentials: true
}))
app.use(async(req,res,next)=> {
  req.context = {models}
  next()
})

// Masukkan Routes
app.use('/users', routes.UserRoute)
app.use('/product', routes.ProductRoute)
app.use(routes.AuthRoute)

const dropDatabaseSync = false

// store.sync()

sequelize.sync({force : dropDatabaseSync}).then(async()=>{
  if (dropDatabaseSync) {
    console.log("Database do not drop");
  }
  app.listen(port,()=>{console.log('Server is listening on port '+port)})
})

export default app