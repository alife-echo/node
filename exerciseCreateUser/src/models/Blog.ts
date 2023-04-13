import { Model,DataTypes } from "sequelize";
import {sequelize} from '../instances/mysql'
import { Op } from "sequelize";
interface BlogInstance extends Model {
     id:number,
     titleBlog:string,
     bodyBlog:string
}

export const Blog = sequelize.define<BlogInstance>('Blog',{
     id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
     },
     titleBlog:{
        type:DataTypes.STRING,
        defaultValue:'Meu Título Padrão'
     },
     bodyBlog:{
        type:DataTypes.STRING,
        defaultValue:'Meu Corpo de texto Padrão'
     }
},{tableName:'blog',timestamps:false})


export const createPost =  async (titlePost:string,bodyPost:string) =>{
    if(titlePost !== '' && bodyPost !== ''){
      let posts = await Blog.findAll({
        where:{
          titleBlog:{
            [Op.in]:[titlePost]
          },
          bodyBlog:{
            [Op.in]:[bodyPost]
          }
        }
    })
    if(posts.length === 0){
      const blog =  await Blog.create({
        titleBlog:titlePost,
        bodyBlog:bodyPost
      })
      return blog
    }
    else{
      console.log('Dados Duplicados')
    }
     
  
       
    }
    else{
      console.log('Insira os dados')
    }
}



export const getPosts = async (where: object) => {
   return await Blog.findAll({
     where: {
       ...where,
       titleBlog: {
         [Op.notIn]: ['Meu Título Padrão'],
       },
       bodyBlog: {
         [Op.notIn]: ['Meu Corpo de texto Padrão'],
       },
     },
   });
 }

 export const updateInfo = async (id:number,title:string,body:string)=>{
  if(isNaN(id)){
     console.log('Insira um número')
  }
  else{
    await Blog.update({titleBlog:title,bodyBlog:body},{
      where:{ 
         id:id
      }
   })
  }
    
 }


 export const deletePostInfo = async (id:number) =>{
    if(isNaN(id)){
      console.log('Insira um número')
    }
    else {
      await Blog.destroy({
         where:{
           id:id
         }
      })
    }
 }