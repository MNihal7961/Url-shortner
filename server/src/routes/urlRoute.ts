import express, { Request, Response, NextFunction } from 'express';

import { createUrlPost, fetcDataByUrlCodeGet } from '../controller/urlController';



const router = express.Router()

router.post("/", createUrlPost)
router.get("/:urlCode", fetcDataByUrlCodeGet)

export default router

