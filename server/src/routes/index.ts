import express from "express";

import urlRouter from "./urlRoute";
import userRouter from './userRoute'

const router = express.Router();

// "/api" as base URL

// start with url
router.use('/url', urlRouter);

// start with user
router.use('/user', userRouter);

export default router;