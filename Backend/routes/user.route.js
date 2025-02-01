
import express from "express";
import {login,register, updatProfile} from "../controllers/user.controler.js"
import isAuthenticated from "../middleware/isAuthenticated.js";  // Correct path

const router=express.Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(  isAuthenticated, updatProfile);




export default router;