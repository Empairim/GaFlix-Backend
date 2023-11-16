import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();
// http://localhost:3030/api/users/
router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);
router.delete("/delete/:id", controllers.deleteUser);

export default router;
