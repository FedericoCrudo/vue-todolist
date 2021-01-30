// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// // Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. 
// Poi aggiungete all'immagine una classe sempre presa dal data.
$(document).ready(function(){
    setTimeout(function(){ $(".contenuto").addClass("animation"); }, 2000);
    $(".link").click(function () {
        $(this).toggleClass("dark-botton");
        $("body").toggleClass("bg_color_red");
        $(".container").toggleClass("bg_color_container");
        $(".btn1").click(function(){
            $("p").slideUp();
          });
    })
  });
var print = new Vue({
    el: '.prova',
    data: {
    message:'',
    id:"",
    nome:"",
    email:"",
    password:"",
    stato:"",
    itemsFilter:[],
   itemsDelete:[],
    items:[
        {
            "index":0,
            "user":"Luca",
            "email":"luca@gmail.com",
            "password":"luca",
            "stato":"on",
            
        },
        {
            "index":1,
            "user":"Luca",
            "email":"luca@gmail.com",
            "password":"luca",
            "stato":"off"
        },
        {
            "index":2,
            "user":"Licci",
            "email":"licci@gmail.com",
            "password":"liccu",
            "stato":"on"
        },
        {
            "index":3,
            "user":"Lorenzo",
            "email":"lorenzo@gmail.com",
            "password":"lore",
            "stato":"on"
        },
        {
            "index":4,
            "user":"Marta",
            "email":"lorenzo@gmail.com",
            "password":"marta",
            "stato":"off"
        },
        {
            "index":5,
            "user":"Federico",
            "email":"federico@gmail.com",
            "password":"federico",
            "stato":"on"
        },
        {
            "index":6,
            "user":"Francesco",
            "email":"francesco@gmail.com",
            "password":"lore",
            "stato":"off"
        }
    ]
    },
    methods:{
        remove(index){
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
      
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
              )
              this.itemsDelete.push(this.items[index]);
            this.items.splice(index,1);
            this.notifydelete();
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
        },
        restore(index,itemindex){
            this.items.splice(itemindex,0,this.itemsDelete[index]);//cosi facendo l'array tornera alla posizione
            this.itemsDelete.splice(index,1);   
            this.notifyrestore();
        },
        removeDelete(index){
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              }) 
              swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                input: 'text',
                text:"I dati verrano eliminati definitivamente",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your data has been deleted.',
                    'success'  
                  )
                 this.itemsDelete.splice(index,1);
                    this.notifydelete();
                } else if (
                  /* Read more about handling dismissals below */
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                  )
                }
              })
        },
        removeall(){
            this.itemsDelete=[];
        },
        display(){
            (this.itemsDelete.length!=0)?$(".buttonDelete").css("display","inline-block"):$(".buttonDelete").css("display","none");
        },
        notifydelete(){
            $("#notify").text("");
            $(".windowsNotification").removeClass("notification-animation bg_color_red");
            $("#notify").text("Elemento eliminato con successo");
            $(".windowsNotification").addClass("notification-animation");
            setTimeout(function(){ $(".windowsNotification").removeClass("notification-animation"); }, 2000);
        },
        notifyempity(){
            $("#notify").text("");
            $(".windowsNotification").removeClass("notification-animation");
            $("#notify").text("Si prega di compilare i campi");
            $(".windowsNotification").addClass("notification-animation bg_color_red");
            setTimeout(function(){ $(".windowsNotification").removeClass("notification-animation"); }, 2000);
        },
        notifyrestore(){
            $("#notify").text("");
            $(".windowsNotification").removeClass("notification-animation bg_color_red");
            $("#notify").text("Elemento Ripristinato con Successo");
            $(".windowsNotification").addClass("notification-animation");
            setTimeout(function(){ $(".windowsNotification").removeClass("notification-animation"); }, 2000);
        },
         filtered() { 
             this.message=this.message.charAt(0).toUpperCase()+ this.message.slice(1).toLowerCase()
            if(this.message.length>=1){
                this.itemsFilter=this.items.filter((element)=>{  
                    return element.user.includes(this.message);
                    });   
                    console.log(this.itemsFilter);      
                }
            else{  
               this.notifyempity()
            }
        },
        removeFilter(index,itemindex){
            this.itemsDelete.push(this.itemsFilter[index]);
            this.itemsFilter.splice(index,1);
            this.items.splice(itemindex,1);
            this.notifydelete();
        },
        addItems(){
            if((this.id=="")||(this.nome=="")||(this.email=="")||(this.password=="")||(this.stato=="")){
                this.notifyempity();
            }
            else{
                this.items.push({
                "index":this.id,
                "user":this.nome,
                "email":this.email,
                "password":this.password,
                "stato":this.stato});
                this.id="";
                this.nome="";
                this.email="";
                this.password="";
                this.stato="";
                Swal.fire(
                    'Aggiunto Con Successo!',
                    "",
                    'success'
                  )
            }
          
        },
        changeItems(){
            alert("Ciao")
        }
     
     

    }
    
  
    
    });