import Sequelize from 'sequelize'
import config from './config'

const dataSequelize = new Sequelize(
	config.db_name,
	config.db_username,
	config.db_password,
	{
		dialect : 'postgres'
	}
)

dataSequelize
	.authenticate()
	.then(()=>console.log('connection has been estabilished successfully'))
	.catch(err => console.log(err))

export {dataSequelize}