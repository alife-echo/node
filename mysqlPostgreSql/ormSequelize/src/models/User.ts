import {Model,DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'


interface UserInstance extends Model{
    id:number,
    name:string,
    age:number
}

export const User = sequelize.define<UserInstance>("User",{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER,
    },
    nameUser:{
        type:DataTypes.STRING
    },
    ageUser:{
        type:DataTypes.INTEGER,
        defaultValue:18
    }
},{
    tableName:'users',
    timestamps:false
})

//createdAt
//updatedAt