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
       const blog =  await Blog.create({
           titleBlog:titlePost,
           bodyBlog:bodyPost
        })
        return blog
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