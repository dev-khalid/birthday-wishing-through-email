import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  res.json({ message: "Created customer... " });
});

export default router;
