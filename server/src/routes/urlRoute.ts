import express from 'express';

import { createUrlPost ,fetchAllUrlsByUser} from '../controller/urlController';



const router = express.Router()

router.post("/", createUrlPost)
router.get("/myurls", fetchAllUrlsByUser)
// router.get("/:urlCode", fetcDataByUrlCodeGet)

export default router

