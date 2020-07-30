
// Funtion Animate in Navbar-Site
//and Active Tooltip
$(function(){
    $("a").click(function(event){
       if (this.hash !== "") {
           event.preventDefault();

           var gato = this.hash;

           $("html, body").animate({
               scrollTop: $(gato).offset().top
           }, 1200, function(){
               window.location.hash = gato;
           });
       }
   });
   
   $('[data-toggle="tooltip"]').tooltip();

});
