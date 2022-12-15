import { verifyUser } from "./../middleware/verifyUser";
import express, { Request, Response, Router } from "express";

import { Register, Login, adminLogin } from "../Controller/UserController";

const router = Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/adminLogin", verifyUser, adminLogin);

export default router;
