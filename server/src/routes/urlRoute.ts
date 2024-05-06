import express, { Request, Response, NextFunction } from 'express';

import { createUrlPost } from '../controller/urlController';



const router=express.Router()

router.post("/",createUrlPost)

export default router

