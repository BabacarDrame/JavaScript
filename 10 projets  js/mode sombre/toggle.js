var sombre=document.getElementById('sombre');
// ici on a utiliser  l'evenement  "change" au lieu de "click"
//les  classlist en js permrt  d'ajouter des class dans un element html 
//et cette derniere (la classse cree) sera stylisé au niveau du css
sombre.addEventListener('change', (e)=>{
    document.body.classList.toggle('dark',e.target.checked);
});