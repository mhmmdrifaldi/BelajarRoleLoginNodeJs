import Router from 'express'
import indexController from '../controllers/indexController'
import Auth from '../middleware/Auth'

const router = Router()
router.get('/', Auth.verifyUser, indexController.ProductController.findAll)

export default router