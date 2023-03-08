import { Request,Response } from "express";

export const name = (req:Request,res:Response)=>{
    console.log("query string",req.query)  
    let nome : string = req.query.nome as string
    let sobrenome : string = req.query.sobrenome as string
    let idade : string = req.query.idade as string
    res.render('pages/nome',{
         nome,
         sobrenome,
         idade
    })
}

export const age = (req:Request,res:Response)=>{
    res.render('pages/idade')
}

export const ageResult = (req:Request,res:Response)=>{
    let idade : number = 0
    let showAge : boolean = false
    if(req.body.ano){
        let anoNascimento : number = parseInt(req.body.ano as string) 
        let anoAtual : number = new Date().getFullYear()
        idade = anoAtual - anoNascimento
        showAge = true
    }
    
     res.render('pages/idade',{
         idade,
         showAge
     })
}