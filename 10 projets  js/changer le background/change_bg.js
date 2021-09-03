var btn= document.getElementById('btn');

btn.addEventListener("click", ()=>{
    // on change le backgroud  du body en faisant appel a la fonction bgrandom suivant
   document.body.style.background= bgrandom();
});

function bgrandom(){
     // ici on génere des couleur hsl de manière  aleatoire 
    // les  fonctions hsl prend trois valeur , ici notre  premiere  valeur  est aleartoire
   // le deuxieme=100% et la  troisieme=50%
   return `hsl(${Math.floor(Math.random() * 360)},100%, 50%)`;
}