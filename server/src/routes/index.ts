import express from "express";

const router=express.Router()

// "/api" as base URL

router.use('/url',(req,res)=>{
    res.status(200).send("hello nihal")
})

export default router