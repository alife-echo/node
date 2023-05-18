import {DataTypes,Model} from 'sequelize'
import {sequelize} from '../instances/mysql'
import {Employee} from './Employee'
import { Client } from './Client'
interface People extends Model {
      id:number,
      name:string
}

export const People  = sequelize.define<People>('People ',{
     id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
     },
     name:{
         allowNull:false,
         type:DataTypes.STRING
     },
     Funcionario_idFuncionario:{
         type:DataTypes.INTEGER,
         allowNull:false,
         unique:true,
         references:{
             key:'id',
             model:Employee
         },
         field:'Funcionario_idFuncionario'
     },
     Client_idClient:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        references:{
            key:'id',
            model:Client
        },
        field:'Client_idClient'
    }
},{tableName:'people',timestamps:false})


