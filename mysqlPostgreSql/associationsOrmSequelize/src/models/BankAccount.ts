import {DataTypes,Model} from 'sequelize'
import {sequelize} from '../instances/mysql'
import { AgencyHasClient } from './AgencyHasClient'
import { Agency } from './Agency'
import { Client } from './Client'
interface BankAccount extends Model {
    id:number,
    numberAccount:number,
    balance:number,
    numberTransaction:number,
    date:string,
    value:number
}


export const BankAccount = sequelize.define<BankAccount>('BankAccount',{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    numberAccount:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    balance:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    numberTransaction:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    value:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    
    AgencyIdAgency:{
        type:DataTypes.INTEGER,
        unique:true,
        references:{
             model:Agency,
             key:'id'
        },
    //    field:'AgencyHasClientId'
    },
    ClientIdClient:{
        type:DataTypes.INTEGER,
        unique:true,
        references:{
             model:Client,
             key:'id'
        },
      //  field:'AgencyHasClientId'
    }
    

},{tableName:'accountbank',timestamps:false})


AgencyHasClient.hasMany(BankAccount,{foreignKey:'id'})
BankAccount.belongsTo(AgencyHasClient,{foreignKey:'id'})