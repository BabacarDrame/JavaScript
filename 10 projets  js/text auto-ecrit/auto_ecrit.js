const text= "je m'ecrit  moi-meme, ma grawwww;"

var index =0;

function autoecrit(){
    // la fonction slice en js permet de recuperer  des lettres dans une variable  de  type  string
    //exemple= var salut= "bonjour"; salut.slice(0,3); permet d'afficher les de 0 à 3  ici ça donne "bon" 
    document.body.innerText=text.slice(0,index);
    index++;

    if(index==text.length-1){
        index=0;
    }
}

 // cette fonction permet  de difinir un interval d'execution pour une fonction ou une variable donné
 // ici notre fontion "autoecrit" est executé à chaque 200 milliseconde
setInterval(autoecrit,200);