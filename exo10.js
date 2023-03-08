var compteur = 0;
var compteur2 = 0;

var Div = document.getElementById ("Methode2");
Div.addEventListener("click", UneProcedureQuiChangeLeText);

Div = document.getElementById ("Methode3");
Div.addEventListener("mouseover", UneProcedureQuiSurvole);

Div = document.getElementById ("Methode4");
Div.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement){
    evenement.target.innerHTML = "On a appuyé sur :"+evenement.key
}

function UneProcedureQuiChangeLeText(evenement){
    compteur++;
    evenement.target.innerHTML = "On m'as cliqué dessus "+compteur+" fois";
}

function UneProcedureQuiSurvole(evenement){
    compteur2++;
    evenement.target.innerHTML = "On m'as survollé"+compteur2+"fois";
}