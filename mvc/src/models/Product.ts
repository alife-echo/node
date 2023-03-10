type Product = {
     title:string,
     price:number
}
const data : Product[] = [
     {title:'Produto X',price:10},
     {title:'Produto Y',price:15},
     {title:'Produto W',price:20},
     {title:'Produto G',price:5}
]

export const Product = {
     getAll : ():Product[] =>{
         return data
     },
     getFromPrinceAfter : (price:number):Product[] =>{
           return data.filter(item => {
              if(item.price > price){
                return item
              }
              else{
                return false
              }
           })
     }
}