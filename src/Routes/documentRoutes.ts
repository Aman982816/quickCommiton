import { Router } from "express";
import { verifyUser } from "../middleware/verifyUser";
const fs = require("fs");
const path = require("path");
const multer = require("multer");

// setting multer for storing uploaded files

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, "uploads");
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

import { Register } from "../Controller/uploadDocumentController";

const router = Router();

router.post(
  "/register",
  verifyUser,
  upload.single("purchaseAgrement"),
  //   upload.single("brokerOfRecord"),

  Register
);

// router.post("/get", verifyUser, Get);

// router.post("/edit", verifyUser, Edit);

export default router;
