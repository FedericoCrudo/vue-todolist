// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// // Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. 
// Poi aggiungete all'immagine una classe sempre presa dal data.
$(document).ready(function(){
    setTimeout(function(){ $(".contenuto").addClass("animation"); }, 5000);
  
  });
var print = new Vue({
    el: '.prova',
    data: {
    message:'',
   itemsDelete:[],
    items:[
        {
            "user":"Luca",
            "email":"luca@gmail.com",
            "password":"luca",
            "stato":"on",
            
        },
        {
            "user":"Luca",
            "email":"luca@gmail.com",
            "password":"luca",
            "stato":"off"
        },
        {
            "user":"licci",
            "email":"licci@gmail.com",
            "password":"liccu",
            "stato":"on"
        },
        {
            "user":"Lorenzo",
            "email":"lorenzo@gmail.com",
            "password":"lore",
            "stato":"off"
        }
    ]

    },
    methods:{
        remove(index){
        this.itemsDelete.push(this.items[index]);
        this.items.splice(index,1);
        },
        restore(index){
            this.items.push(this.itemsDelete[index]);
            this.itemsDelete.splice(index,1);   
        },
        removeDelete(index){
            this.itemsDelete.splice(index,1);
        },
        display(){
            (this.itemsDelete.length!=0)?$(".buttonDelete").css("display","inline-block"):$(".buttonDelete").css("display","none");
            console.log(this.itemsDelete.length);
        }
    }
    
    });