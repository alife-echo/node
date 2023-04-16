import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

interface ProductsInstance extends Model{
     id:number,
     nameProduct:string,
     category:string,
}

export const Product = sequelize.define<ProductsInstance>('Product',{
      id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
      },
      nameProduct:{
         allowNull:false,
         type:DataTypes.STRING
      },
      category:{
         allowNull:false,
         type:DataTypes.STRING
      }

},{tableName:'product',timestamps:false})


sequelize.sync()
  .then(() => {
    console.log('Tabela Usuarios criada com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao criar tabela Usuarios:', error);
  });