
import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controler.js";

import isAuthenticated from "../middleware/isAuthenticated.js";  // Correct path

const router=express.Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout)
router.route("/profile/update").post(isAuthenticated, updateProfile);





export default router;