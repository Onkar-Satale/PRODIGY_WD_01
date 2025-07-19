import express from "express";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Protected GET route
router.get("/", protect, (req, res) => {
    res.status(200).json({
        message: "You have accessed a protected route",
        userId: req.user
    });
});

export default router;
