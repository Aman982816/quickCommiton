import { Router } from "express";
import { verifyUser } from "../middleware/verifyUser";

import { Register } from "../Controller/uploadDocumentController";
const fs = require("fs");
const path = require("path");
const multer = require("multer");

// setting multer for storing uploaded files

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  // filename: (req: any, file: any, cb: any) => {
  //   cb(null, file.originalname );
  // },
  filename: (req: any, file: any, cb: any) => {
    cb(null, Date.now() + "-" + Math.random() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = Router();

router.post("/register", verifyUser, upload.array("files", 8), Register);

// router.post("/get", verifyUser, Get);

// router.post("/edit", verifyUser, Edit);

export default router;
