import {Model , DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface UserInstance extends Model {
    id:number,
    email:string,
    password:string
}

export const User = sequelize.define<UserInstance>('User',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    email:{
        unique:true,
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
},{
    tableName:'users',
    timestamps:false
})

User.sync().then(()=>{
     console.log('Tabela usuario criado com sucesso')
}).catch(error =>{
     console.log('Error ao criar a tabela',error)
})