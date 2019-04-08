/**
 * interpolações
 * {{   msg     }} : atualiza quando for alterada
 * 
 * 
 * para não ser atualizada usa-se v-once
 * <span v-once>This will never change {{ msg }}</span>
 * 
 * 
 * {{ }} : interpretam dados como texto simples. Não podem ser utilizados como atributo html, para isso usa-se 'v-bind'
 *      aceita expressões Javascript (apenas uma) ex: {{    number + 1  }} {{  ok ? 'YES' : 'NO'  }}
 * v-html: para interpretar codigo html -> <span v-html>text</span>
 *  
 * v-bind: em caso de atributos booleanos -> <button v-bind:disabled="isButtonDisabled">buton</button>
 * 
 * DIRETIVAS
 * v- Espera-se que valores dos atributos diretivos sejam um única expressão JS. Com exeção do v-for
 * 
 * 
 * 
 * 
 */

 new Vue({
     el:'#app-1',
     data:{
         foo: 'Foo String!',
         hawHtml:'<span style="color:red;"> This a HTML tag </span>',
         number: 12
     }
 })

 new Vue({
     el:"app-2_shortand"
 })

