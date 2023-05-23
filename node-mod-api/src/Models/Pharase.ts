import {DataTypes,Model} from 'sequelize'
import {sequelize} from '../instances/mysql'

interface PhraseTypeInstance extends Model{
    id:number,
    author:string,
    txt:string
}


export const Phrase = sequelize.define<PhraseTypeInstance>('Phrase',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    author:{
        allowNull:false,
        type:DataTypes.STRING
    },
    txt:{
        type:DataTypes.STRING
    }
},{tableName:'phrases',timestamps:false})

Phrase.sync().then(()=> {
     console.log('Tabela Frase criada com sucesso')
}).catch((error)=>{
     console.log('Erro ao criar tabela',error)
})