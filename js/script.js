// vsriabili
var menu = $('i.fas.fa-bars');
var hamburger = $('.hamburger-menu');

//opzioni per il Menu
menu.click(
  function(){
    hamburger.show(400);
  }
)

hamburger.click(
  function() {
    hamburger.hide(400);
  }
);
