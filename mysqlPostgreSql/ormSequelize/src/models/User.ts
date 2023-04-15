import {Model,DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'


interface UserInstance extends Model{
    id:number,
    nameUser:string,
    ageUser:number
}

export const User = sequelize.define<UserInstance>("User",{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER,
    },
    nameUser:{
        type:DataTypes.STRING,
        get(){
            const raw:string = this.getDataValue('nameUser')
            return raw.toUpperCase()
        }
    },
    lastName:{
        type:DataTypes.STRING,
    },
    fullName:{
         type:DataTypes.VIRTUAL,
         get(){
            return `${this.getDataValue('nameUser')} ${this.getDataValue('lastName')}`
         }
    },
    firstLetterOfName:{
      type:DataTypes.VIRTUAL,
      get(){
        let name : string = this.getDataValue('nameUser')
        return name.charAt(0)
      }   
    },
    ageUser:{
        type:DataTypes.INTEGER,
        defaultValue:18,
        set(value:number){
            if(value < 18){
                 value = 18
            }
             this.setDataValue('ageUser',value)
        }
    },
    
},{
    tableName:'users',
    timestamps:false
})

//createdAt
//updatedAt