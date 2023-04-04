import { Model,DataTypes } from "sequelize";
import {sequelize} from '../instances/mysql'

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
        type:DataTypes.STRING
     },
     bodyBlog:{
        type:DataTypes.STRING
     }
},{tableName:'blog',timestamps:false})