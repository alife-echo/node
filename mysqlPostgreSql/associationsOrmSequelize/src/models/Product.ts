import {sequelize} from "../instances/mysql";
import { DataTypes,Model } from "sequelize";
import { Manufacturer } from "./Manufacturer";

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
     },
},{tableName:'product',timestamps:false})


Product.hasOne(Manufacturer,{foreignKey:'product_id'})
Manufacturer.belongsTo(Product,{foreignKey:'product_id'})
//Manufacturer.sync().then(()=>console.log('Tabelas Criadas com sucesso')).catch(error => console.log(error))