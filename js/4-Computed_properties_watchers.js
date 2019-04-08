/**
 * Nos casos em que você não deseja armazenar em cache, use um método.
 */

 
Vue.component('p-custom',{
    template: "<p>Static Customized P</p>"
});

var vm = new Vue({
     el:"#app-4",
     data:{
         message: "Olá Mundo!!"
     },
     computed:{
         reversedMessage: function(){
             return this.message.split('').reverse().join('') + Date.now();
         }
     }
 });


/**
 * COMPUTED VS OBSERVED
 */

 // Observed

 var vm2 = new Vue({
     el:"#observed",
     data:{
         firstName:"Diogo",
         lastName:"Oliveira",
         fullName:"Diogo Oliveira"
     },
     //observador
     watch: {
         firstName: function(val){
             this.fullName=val+' '+this.lastName
         },
         lastName: function(val){
             this.fullName=this.firstName + ' ' + val
         }
     }
 });

 //computed
 var vm3 = new Vue({
     el:"#computed",
     data:{
         firstName: 'Diogo',
         lastName: 'Oliveira'
     },
     computed: {
         fullName: function(){
             return this.firstName + ' ' +this.lastName
         }
     }
 });

 /**
  *     Por padrão, propriedades computadas ão somente getters, porém pode fornecer um setter 
  * 
  */

  var vm4 = new Vue({
      el:"#setComputed",
      data:{
          firstName:'Diogo',
          lastName:'Oliveira'
      },
      computed:{
          fullName:{
              get:function(){
                  return this.firstName + ' ' +this.lastName
              },
              set:function(val){
                var names = val.split(' ');
                this.firstName=names[0];
                this.lastName=names[names.lenght-1];
              }
          }

      }
  });

  var watchExampleVM = new Vue({
      el:"#watch-example",
      data:{
          question:'',
          answer: 'Não posso dar uma resposta sem antes você fazer a pergunta!'
      },
      watch:{
          question: function(newQuestion,oldQuestion){
              this.answer = 'Waiting for yout to stop typing...';
              this.deboucedGetAnswer()
          }
      },
      created: function(){
          this.deboucedGetAnswer=_.deboucedGetAnswer(this.getAnswer,500)
      },
      methods:{
          getAnswer:function(){
              if(this.question.indexOf('?')===-1){
                  this.answer='Question usually contain a question mark. ;-)';
                  return;
              }
              this.answer='Thiking...';
              var vm=this;
              axios.get('https://yesno.wtf/api')
                .then(function(response){
                    vm.answer=_.capitalize(response.data.answer);
                })
                .catch(function (error){
                    vm.answer='Error! Could not reach the API. '+ error
                })
          }
      }
  })