var btun =document.querySelector('#btn');
var container=document.getElementById('container');

// ici j'aic utilisé des  fonction fleché en java script ça fonctionne
// de  la  meme maniere  que  les fonctions cassiques
btun.addEventListener("click", () => {
     creernotification();
});

 function creernotification(){
     // on cree un div html avec la  fonction "creatElement"
     const notif=document.createElement("div");
     // on applique  a la div crée la classe css "toast"
     notif.classList.add('toast');
     notif.innerText="java script est un  language fort";
     // avec la  fonction "appendchild" on ajoute cette div cree en js  dans  la  div qui se 
     // touve dans  notre page html qui a l' id container
     container.appendChild(notif);
     
     // cette fonction me  permet  de  suprimer la div cree avec son contenu apres 2000 milliseconde
     setTimeout(()=>{
         notif.remove();
     },2000);

 }