import express from "express";
import {
  RegisterUser,
  UpdateUser,
  LoginUser,
  LogoutUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/logout", LogoutUser);
router.put("/update", UpdateUser);

export default router;