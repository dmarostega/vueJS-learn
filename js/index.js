
/* Delcaration Rendering */
var app = new Vue({
    el: "#app",
    data:{
        seen: true,
        message: 'Ola VueJS, v-if & v-bind!!',
        seen_broken:false,
        message_broken: 'Tá ai?',
        messageTitle: "Você carregou essa página em "+new Date().toLocaleDateString()
    }
});

var app2 = new Vue({
   el:"#app",
   data:{
   }
});

var app4 = new Vue({
   el:"#app-4",
   data:{
      message: "Vue, v-for",
      todos:[
         {text: "Learn Javascript"},
         {text: "Learn Vue"},
         {text: "Learn HTML5"},
      ]
   }
});

var app5 = new Vue({
   el:"#app-5",
   data: {
      message:"App-5: v-on, Manipulando entrada de Usuário!!"
   },
   methods:{
      reverseMessage: function(){
         this.message=this.message.split('').reverse().join('')
      }
   }
});

var app6=new Vue({
   el:"#app-6",
   data:{
      message: "Olá VueJS, v-model !!",
      inputMessage: "Insera um texto.."
   }
});