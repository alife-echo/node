import express,{Request,Response} from 'express'
import {sequelize} from '../instances/mysql'
import { Op } from 'sequelize'
import {Blog,createPost,getPosts} from '../models/Blog'
export const home = async (req:Request,res:Response)=>{

     try{
        await sequelize.authenticate()
        console.log('Conexão estabelecida com sucesso')

        const posts = await getPosts({});
    
        res.render('pages/home',{
            posts
        })
     }          
     catch(error){
         console.log(error)
     }
}

export const postSubmit = async (req:Request,res:Response)=>{
    let title : string = req.body.titlePost as string
    let body : string = req.body.bodyPost as string
   

   createPost(title,body)

   const posts = await getPosts({});
  
    res.render('pages/home',{
        posts
    })
}

export const updatePost = async (req:Request,res:Response)=>{

    const posts = await getPosts({});

    res.render('pages/update',{
        posts
    })

}


export const deletePost = async (req:Request,res:Response)=>{

    const posts = await getPosts({});

    res.render('pages/delete',{
        posts
    })

}