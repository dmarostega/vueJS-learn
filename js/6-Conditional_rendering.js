/**
 * 
 * RENDERIZAÇÃO CONDICIONAL
 *      v-if
 */

 new Vue({
     el:"#app",
     data:{
         message: "Testando Item 6, da documentação.",
         awesome:"Yes",
         ok:"ok",
         type:'B'
     }
 });


 
 /**    
  *     Lista de Renderização v-for
  */


 new Vue({
     el:"#app-list",
     data:{
         parentMessage:'Parent',
        items:[
             {message: 'Item 1'},
             {message: 'Item 2'},
             {message: 'Last Item'}
         ],
         object:{
             firstName:'John',
             lastName:'Doe',
             age:23
         }
     }
 }).items.push({message:"Novo Item..."})
   .sort()
