import { Router } from "express";


const router = Router()

router.get('/ping',(req,res)=>{
     res.json({pong:true})
})

router.get('/random',(req,res)=>{
    let nRand : number = Math.floor(Math.random() * 10)
     res.json({random:nRand})
})

router.get('/name/:name',(req,res)=>{
      let nome : string = req.params.name
      res.json({nome})
})

export default router