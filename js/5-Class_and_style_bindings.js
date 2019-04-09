var vm = new Vue({
    el:"#bind-class",
    data:{
        isActive:true,
        hasError: true,
        errorMessage: "Deu erro!",
        message: "Aqui tá funcionando!"
    }
})

var vm2 = new Vue({
    el:"#bind-object",
    data:{
        classObject: {
            active: true,
            'text-danger': false
        },
        message: " Olá, objeto vinculado!!"
    }
})

var vm3=new Vue({
    el: "#bind-computed",
    data:{
        isActive: true,
        erro: null,
        message: "Olá, objeto Computado!!"
    },
    computed:{
        classObject: function(){
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type==='fatal'
            }
        }
    }
})

new Vue({
    el:"#bind-array",
    data:{
        message: 'Aqui tem duas classes',
        activeClass:'active',
        errorClass:'text-danger'
    }
});

new Vue({
    el:"#bind-array-ternario",
    data:{
        message:'condição ternaria',
        isActive:false,
        activeClass:'active',
        errorClass:'text-danger'
    }
})

Vue.component('my-component',{
    template: '<p class="foo bar ola" >Hi</p>'
});

new Vue({
    el:"#with-components",
    data:{
        message: 'With components, as classes já existentes não serão sobrescritas.',
        isActive:true
    }
});

new Vue({
    el:"#bind-style",
    data:{
        messageObj: "Sitaxe de Objeto",
        activeColor: true,
        fontSize: 23,
        messageClass: "Sintaxe Class",
        styleObject:{
            color: 'red',
            fontSize: '45px'
        },
        baseStyle:{
            color: 'blue',
            fontSize: '14px',
            borderSize: '1px',
            borderColor: 'gray'
        }
    }
});