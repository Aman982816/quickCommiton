import express, { Request, Response, Router } from "express";
import { verifyUser } from "../middleware/verifyUser";

import { Register, Edit, Get } from "../Controller/ApplicationController";

const router = Router();

router.post("/register", verifyUser, Register);
router.post("/edit", verifyUser, Edit);
router.post("/get", verifyUser, Get);

export default router;
