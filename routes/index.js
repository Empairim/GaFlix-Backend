import { Router } from "express";
import horrorRoutes from "./horrorMovie.js";
import actionRoutes from "./actionMovie.js";
import userRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/horror", horrorRoutes);
// http://localhost:3030/api/
router.use("/action", actionRoutes);

router.use("/users", userRoutes);

export default router;
