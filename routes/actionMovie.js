import { Router } from "express";
// importing all the controllers using * from controllers and then referencing the object with the name "controllers"
import * as controllers from "../controllers/moviesController.js";

const router = Router();
//thats why here we do controllers.getcats ect its dot notation because its an object
router.get("/all", controllers.getAllAction);
// router.get("/:id", controllers.getCat);
// router.post("/", controllers.createCat);
// router.put("/:id", controllers.updateCat);
// router.delete("/:id", controllers.deleteCat);

export default router;
