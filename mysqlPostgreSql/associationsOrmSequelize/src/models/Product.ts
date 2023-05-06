import {sequelize} from "../instances/mysql";
import { DataTypes,Model } from "sequelize";

interface Product extends Model {
 id:number,
 nameProdcut:string,
 categoriyProduct : string
}

export const Product = sequelize.define<Product>('Product',{
     id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
     },
     nameProduct:{
       type:DataTypes.STRING,
       allowNull:false  
     },
     categoryProduct:{
         allowNull:false,
         type:DataTypes.STRING
     }
},{tableName:'product',timestamps:false})