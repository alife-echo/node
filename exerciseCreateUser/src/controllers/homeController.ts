import express,{Request,Response} from 'express'
import {sequelize} from '../instances/mysql'
import { Op } from 'sequelize'
import {Blog} from '../models/Blog'
export const home = async (req:Request,res:Response)=>{

     try{
        await sequelize.authenticate()
        console.log('Conexão estabelecida com sucesso')

    
        res.render('pages/home')
     }          
     catch(error){
         console.log(error)
     }
}

export const postSubmit = async (req:Request,res:Response)=>{
    let title : string = req.body.titlePost as string
    let body : string = req.body.bodyPost as string
     if(title !== '' && body !== ''){
        const createBlog = await Blog.create({
            titleBlog:title,
            bodyBlog:body
       })
     }
     else{
        console.log('Insira os dados')
     }
       
     
    const posts  = await Blog.findAll({
         where:{
            titleBlog:{
                [Op.notIn]:['Meu Título Padrão']
            },
            bodyBlog:{
                [Op.notIn]:['Meu Corpo de texto Padrão']
            }
         }
    })
    res.render('pages/home',{
        posts
    })
}