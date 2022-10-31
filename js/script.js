// menu burger <===============================>

let body = document.querySelector('body');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.onclick = function(){
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock')
   };

document.onclick = function(e){
   if(e.target.id !== 'burger' && e.target.classList !== 'menu')
   {
      burger.classList.remove('active');
      menu.classList.remove('active');
      body.classList.remove('lock');
   }
}
// <=>

// slider <==================================>
$(document).ready(function(){
   $('.intro__slider').slick({
      arrows:false,
      dots:true,
      speed:1000,
      easing:'ease',
      infinity:true,
      autoplay:true,
      autoplaySpeed:2000,
      draggable:false,
      touchThreshold:10,
      pauseOnHover:false,
      pauseOnfocus:false,
      pauseOnActive:false,
      touchMove:true,
      waitForAnimate:true, 
      slidesToShow:1,
      fade:true,
   })
});
// <=>

// header show <==================================>
var lastScrollTop = 0;
   navbar = document.getElementById('navbar');
window.addEventListener("scroll" , function(){
   var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop){
      navbar.style.top='-60px'
   } else {
      navbar.style.top='0'
   }
   lastScrollTop = scrollTop;
})
// <=>

// news <==================================>
const news1 = document.getElementById('news1');
news1.onclick = function(){
   news1.classList.toggle('active');
   };

const news2 = document.getElementById('news2');
news2.onclick = function(){
   news2.classList.toggle('active');
   };
// <=>
