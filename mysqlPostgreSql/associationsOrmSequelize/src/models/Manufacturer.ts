import { DataTypes,Model } from "sequelize";
import {sequelize} from '../instances/mysql'

interface Manufacturer extends Model {
     id:number,
     nameManufacturer : string,
     cnpjManufacturer:number
}

export const Manufacturer = sequelize.define<Manufacturer>('Manufacturer',{
     id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
     },
     nameManufacturer:{
         type:DataTypes.STRING,
         allowNull:false
     },
     cnpjManufacturer:{
         type:DataTypes.INTEGER,
         allowNull:false
     }
},{tableName:'manufacturer',timestamps:false})