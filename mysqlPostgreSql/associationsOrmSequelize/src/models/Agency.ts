import { Model,DataTypes } from "sequelize";
import {sequelize} from '../instances/mysql'

interface Agency extends Model{
    id:number,
    numberAgency:number,
    city:string
}

export const Agency = sequelize.define<Agency>('Agency',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    numberAgency:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName:'Agency',timestamps:false})

