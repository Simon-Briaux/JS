var salut = "salut toi";
var nom = "simon";
var age = "19";
var fruit = ['fraise','orange'];
var objet = window;
var nombre = prompt("entrez un nombre",10);
var largeur=window.innerWidth;
var hauteur=window.innerHeight;
//alert(nom + age + fruit[0] + objet.location.pathname);

/* if (nombre == "nom" && nombre !=200 || nombre <=100){
    alert("t es nul");
}else{
    alert("t es bon");
}
*/

/* if(hauteur && largeur < 800){
    alert("trop petit");
}else{
    alert("salut");
}
*/

nombre = parseInt(nombre);
var resultat = 1;
for (var i = 1; i <= nombre; i++) {
  resultat *= i;
}
alert("Le factoriel de " + nombre + " est " + resultat);