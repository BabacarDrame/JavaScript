// acces au div qui contient l'ensemble des images 
var imgs= document.getElementById('imgs');
// acces au div qui contient l'ensemble des images at aux images en meme temp
var img=document.querySelectorAll('#imgs img');

let index=0;

function run(){
    index++;
    if(index==img.length){
        index=0;
  }
    imgs.style.transform=`translateX(${-index * 300}px)`;
     
}
// on utilise cette fonction pour  executer  la  fonction run a chaque  2000milliseconde 
  setInterval(run,2000);


 