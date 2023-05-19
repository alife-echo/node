import {DataTypes,Model} from 'sequelize'
import {sequelize} from '../instances/mysql'
import { People } from './People'

interface Client extends Model {
      id:number,
      name:string
}

export const Client  = sequelize.define<Client>('Client ',{
     id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
     },
     rg:{
         allowNull:false,
         type:DataTypes.STRING
     },
     city:{
        allowNull:false,
        type:DataTypes.STRING
     }
},{tableName:'client',timestamps:false})


