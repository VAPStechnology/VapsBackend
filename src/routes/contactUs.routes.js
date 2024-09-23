import { Router } from "express";
import { formSubmit } from "../controllers/contactUs.controller.js";








const router = Router();

router.route("/submit").post(formSubmit);



export default router;