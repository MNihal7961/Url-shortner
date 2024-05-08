import express from 'express';

import { createUrlPost, fetchAllUrlsByUserGET, redirectByUrlCodeGet } from '../controller/urlController';

const router = express.Router();

router.post("/", createUrlPost);
router.get("/myurls", fetchAllUrlsByUserGET);
router.get("/:urlCode", redirectByUrlCodeGet);

export default router;

