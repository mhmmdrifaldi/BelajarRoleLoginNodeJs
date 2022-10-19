import 'dotenv/config'
import express from "express";
import cors from "cors";
import compress from "compression";
import helmet from "helmet";
import session from 'express-session'
import models,{sequelize} from "./models/init-models";
import routes from './routes/IndexRoute'

const port = process.env.PORT || 3000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.use(compress())
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
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

//Masukkan Routes
// app.use(config.URL_API + '/jenis_makanan', routes.JenisBarangRoute)

const dropDatabaseSync = false

sequelize.sync({force : dropDatabaseSync}).then(async()=>{
  if (dropDatabaseSync) {
    console.log("Database do not drop");
  }
  app.listen(port,()=>{console.log('Server is listening on port '+port)})
})

export default app