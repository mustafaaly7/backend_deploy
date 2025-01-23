import express from "express";


const routes = express.Router()


routes.get("/" , (req,res)=>{
    res.status(200).json({
        error: null,
        msg : "Working fine everything "
    })
})



export default routes