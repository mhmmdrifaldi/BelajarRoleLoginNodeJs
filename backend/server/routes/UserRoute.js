import Router from "express";
import IndexController from "../controllers/IndexController";
import Auth from "../middleware/Auth";

const router = Router();
router.get("/", Auth.verifyUser, Auth.adminOnly, IndexController.UserController.getUsers);
router.get("/:id", Auth.verifyUser, Auth.adminOnly, IndexController.UserController.getUserById);
router.post("/", Auth.verifyUser, Auth.adminOnly, IndexController.UserController.createUser);
router.put("/:id", Auth.verifyUser, Auth.adminOnly, IndexController.UserController.updateUser);
router.delete("/:id", Auth.verifyUser, Auth.adminOnly, IndexController.UserController.deleteUser);

export default router;
