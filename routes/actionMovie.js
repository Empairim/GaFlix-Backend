import { Router } from "express";
import * as controllers from "../controllers/moviesController.js";
// http://localhost:3030/api/action
const router = Router();

router.get("/all", controllers.getAllAction);
// router.get("/:id", controllers.getCat);
// router.post("/", controllers.createCat);
// router.put("/:id", controllers.updateCat);
// router.delete("/:id", controllers.deleteCat);

export default router;
