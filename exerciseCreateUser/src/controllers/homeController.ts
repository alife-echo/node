import express,{Request,Response} from 'express'
import {sequelize} from '../instances/mysql'

import {createPost,getPosts,updateInfo,deletePostInfo} from '../models/Blog'
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

export const update = async (req:Request,res:Response) => {
    const posts = await getPosts({});

    res.render('pages/update',{
        posts
    })
}
export const updatePost = async (req:Request,res:Response)=>{

    let id : number = parseInt(req.body.idPost as string)
    let title : string = req.body.titleUpdatePost as string
    let body : string = req.body.bodyPostUpdate as string
   
    updateInfo(id,title,body)
    const posts = await getPosts({});

    res.render('pages/update',{
        posts
    })

}

export const deletePage = async(req:Request,res:Response) =>{
    const posts = await getPosts({});

    res.render('pages/delete',{
        posts
    })
}
export const deletePost = async (req:Request,res:Response)=>{
    let id : number = parseInt(req.body.idDeletePost as string)
    

    const posts = await getPosts({});
    deletePostInfo(id)
    res.render('pages/delete',{
        posts
    })
}