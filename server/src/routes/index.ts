import express from "express";

import urlRouter from "./urlRoute";

const router = express.Router();

// "/api" as base URL

router.use('/url', urlRouter);

export default router;