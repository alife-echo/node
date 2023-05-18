import {Request,Response} from 'express'

import { Phrase } from '../Models/Pharase'

export const  ping = (req:Request,res:Response) =>{
     res.json(({pong:true}))
}

export const random = (req:Request,res:Response)=>{
    let nRand : number = Math.floor(Math.random() * 10)
    res.json({random:nRand}
)}

export const  name =  (req:Request,res:Response)=>{
    let nome : string = req.params.name
    res.json({nome})
}