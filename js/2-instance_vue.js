

/*  Exemplo de arvore de um instância Vue
    Componentes do Vue, também são instância do Vue.
*/

/**
 * 
 * Root Instance
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics 
      */


var data = { a:1 }

/*  CRIANDO UM INSTANCIA VUE */ 
var vm = new Vue({
    //options
    el: "#app-1",
    data: data
});      

vm.a == data.a //  => true

vm.a=2
data.a // => 2

//OR
/** dados ao serem alterados a visualização será renderizada novamente.
 *   propriedades em 'data' são reativas se existirem quando a instância for criada.
 * 
 *  ex. vm.b = 4 => não renderiza nova visualização
 * 
 *  Object.freeze(data) -> nesse caso dados em data não poderão serem alterados
 */

data.a = 3
vm.a // => 3

var obj = {
    foo:'bar'
}

//Object.freeze(obj);

new Vue({
    el: '#app-freeze',
    data:obj
});


/**
 *  Usa=se '$' para diferenciar propriedades da instância com propriedades de objetos definidos pelo usuário
 */
var vm2 = new Vuew({
    el:'#element',
    data:data
})

data === vm2.$data; //true
vm2.$el == document.getElementById('example') // true

/**
 *    Gatilhos do Ciclo de vida: oferece ao usuário adicionar seu próprio código em etapas espedificas
 */

 new Vue({
       data: {
             a: 2
       },
       created:function(){
             // your code
       },
       mounted:function(){
             //your code
       },
       updated: function(){
             //your code
       },
       destroyed: function(){
             //your code
       }
 })
