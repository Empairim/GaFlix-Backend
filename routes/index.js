import { Router } from "express";
import userRoutes from "./users.js";
import movieRoutes from "./movies.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/users", userRoutes);
router.use("/movies", movieRoutes);

export default router;
