import { Router } from "express";
import * as controllers from "../controllers/moviesController.js";

const router = Router();

router.get("/", controllers.getMovies);
router.get("/:id", controllers.getMovie);
router.post("/", controllers.createMovie);
router.put("/:id", controllers.updateMovie);
router.delete("/:id", controllers.deleteMovie);

export default router;
