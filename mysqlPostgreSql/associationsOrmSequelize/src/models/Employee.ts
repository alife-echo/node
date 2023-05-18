import {DataTypes,Model} from 'sequelize'
import {sequelize} from '../instances/mysql'
import {People} from './People'

interface Employee extends Model {
      id:number,
      adress:string,
      codeEmployee : number,
      wage:number
}

export const Employee = sequelize.define<Employee>('Employee',{
     id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
     },
     adress:{
         allowNull:false,
         type:DataTypes.STRING
     },
     codeEmployee:{
         type:DataTypes.INTEGER,
         allowNull:false
     },
     wage:{
        type:DataTypes.FLOAT,
        allowNull:false
     }
},{tableName:'employee',timestamps:false})


Employee.hasOne(People,{foreignKey:'Funcionario_idFuncionario'})
People.belongsTo(Employee,{foreignKey:'Funcionario_idFuncionario'})