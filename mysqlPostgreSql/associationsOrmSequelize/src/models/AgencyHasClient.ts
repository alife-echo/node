import {DataTypes,Model} from 'sequelize'
import {sequelize} from '../instances/mysql'

import { Client } from './Client'
import { Agency } from './Agency'
import { BankAccount } from './BankAccount'

interface AgencyHasClient extends Model{
    AgencyIdAgency: number,
    ClientIdClient:number
}

export const AgencyHasClient = sequelize.define<AgencyHasClient>('AgencyClient',{
    AgencyIdAgency:{
        type:DataTypes.INTEGER,
        references:{
            model:Agency,
            key:'id'
        }
    },
    ClientIdClient:{
        type:DataTypes.INTEGER,
        references:{
            model:Client,
            key:'id'
        }
    }
},{tableName:'agencyHasclient',timestamps:false})

Agency.belongsToMany(Client,{through:AgencyHasClient})
Client.belongsToMany(Agency,{through:AgencyHasClient})




