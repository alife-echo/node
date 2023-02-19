/*const Matematica = require('./Matematica') common js*/
// * = tudo
//estou importando tudo e chamando de Matematica
//import * as Matematica from './Matematica'
import {somar,subtrair} from './Matematica' // importação seletiva
console.log("Somar:"+somar(2,3)) 
console.log("Subtrair:" + subtrair(5,3))
