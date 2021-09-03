var open=document.getElementById('open');
var close=document.getElementById('close');
var container=document.getElementById('container');

  //activation du pop up  
open.addEventListener('click', ()=> {
   container.classList.add('active');
}
)
// desactivation du pop up 
close.addEventListener('click', ()=> {
     container.classList.remove('active');
});
