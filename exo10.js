var MaDiv = document.getElementById("MaDivNum1");

MaDiv.addEventListener("click", changement);

function changement(evenement) {
    evenement.target.innerHTML = "On m'a cliqué dessus !";
}

var compteur = 0;
var compteur2 = 0;

var MaDiv2 = document.getElementById("Methode1");
MaDiv2.addEventListener("click", changementEcriture);

var MaDiv2 = document.getElementById("Methode2");
MaDiv2.addEventListener("mouseover", survole);

var MaDiv2 = document.getElementById("Methode3");
MaDiv2.addEventListener("keydown", ecriture);



function ecriture(evenement) {
    evenement.target.innerHTML = "On a cliqué sur : "+evenement.key+" !";
}

function changementEcriture(evenement) {
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus "+compteur+" fois !";
}

function survole(evenement) {
    compteur2++;
    evenement.target.innerHTML = "On m'a survolé "+compteur2+" fois !";
}

