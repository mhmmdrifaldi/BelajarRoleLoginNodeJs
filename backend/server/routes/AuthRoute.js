import { Router } from "express";
import IndexController from "../controllers/IndexController";

const router = Router();
router.get('/me', IndexController.AuthController.me)
router.post('/login', IndexController.AuthController.login)
router.delete('/logout', IndexController.AuthController.logout)

export default router;
