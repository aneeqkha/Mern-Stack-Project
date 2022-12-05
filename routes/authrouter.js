import express  from "express";
import { login,signup,Member,fetchdata,userfetch } from "../controller/auth.js";


const router=express.Router();

router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/members').post(Member)
router.route('/fetchdata').get(fetchdata)
router.route('/fetchuser').get(userfetch)

export default router
