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
         type:DataTypes.STRING,
         allowNull:false
     },
     product_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        references:{
             model:'product',
             key:'id'
        },
        field:'product_id'
     }
},{tableName:'manufacturer',timestamps:false})


//Manufacturer.sync().then(()=>console.log('Fabricante  criado com sucesso')).catch(error => console.log(error))