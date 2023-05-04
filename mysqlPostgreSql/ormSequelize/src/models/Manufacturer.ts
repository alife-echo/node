
import {sequelize} from '../instances/mysql'
import  {Model,DataTypes} from 'sequelize'

interface Manufacturer  extends Model{
    id:number,
    name:string
}

export const Manufacturer = sequelize.define<Manufacturer>('Manufacturer',{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName:'manufacturer',timestamps:false})

Manufacturer.sync({}).then(()=>{
     console.log('Tabela Fabricante Criada com suecesso')
}).catch(error => {console.error('Tabela Fabricante não criada:',error)})