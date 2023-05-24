import {Request,Response} from 'express'
import { Sequelize } from 'sequelize'
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

export const createPhrase = async (req:Request,res:Response)=>{
    let {author,txt} = req.body
    let newPharase =    await Phrase.create({author,txt})
    res.status(201)
    res.json({id:newPharase.id, author,txt})
    //res.json({body:req.body})
}

export const getPhrases = async (req:Request,res:Response) =>{
    let list = await Phrase.findAll()
    res.json({list})
}
export const getPhrase = async (req:Request,res:Response) =>{
    let {id}  = req.params
    let phrase = await Phrase.findByPk(id)
    if(phrase){
        res.json({phrase})
    }
    else{
        res.json({error:'Frase não encontrada'})
    }
    
}

export const updatePhrase =async (req:Request,res:Response) => {
    let {id} = req.params
    let phrase = await Phrase.findByPk(id)
    let {txtUpdate,authorUpdate} = req.body
    if(phrase){
             await Phrase.update({txt:txtUpdate,author:authorUpdate},{
            where:{
               id
            }
       })
       await phrase.save()
       res.json({phrase})
    }
    else {
        res.json({error:'frase ou autor não existe'})
    }
 
}

export const deletePhrase = async (req:Request,res:Response) => {
     let {id} = req.params
     let deletePhrase = await Phrase.destroy({where:{id:id}})
     res.json({})
}

export const randomPhrase = async (req:Request,res:Response) => {
 let phrase = await Phrase.findOne({ //--> procura apenas um dado pra mim
    order:[ // --> a ordenação para busca será
        Sequelize.fn('RAND') // --> aleatoriamente
    ]
 })
 if(phrase){
    res.json({phrase})
 }
 else{
    res.json({error:'Não a frases cadastradas'})
 }
 
}