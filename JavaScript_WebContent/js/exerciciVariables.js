/**
 * 
 */

//------
//FASE 1
//------

var nom = "Pepe";
var cognom1 = "Perez";
var cognom2 = "Garcia";

var dia = 28;
var mes = 5;
var any = 2020;

var fase1 = cognom1+" "+cognom2+", "+nom;
fase1 += "<BR>";
fase1 += dia + "/" + mes + "/" + any;

document.getElementById("fase1").innerHTML=fase1;

//------
//FASE 2
//------

const anyInicial = 1948;
var periodeAnyTraspas = 4;
var anyNaixement = 1982;

var numAnysTraspas = (anyNaixement - anyInicial) / periodeAnyTraspas;
numAnysTraspas = Math.floor(numAnysTraspas);

var fase2 = "Hi ha " + numAnysTraspas + " anys de trasp&agrave;s entre "+ anyInicial + " i " + anyNaixement;

document.getElementById("fase2").innerHTML=fase2;

//------
//FASE 3
//------
var fase3 = "";

for(var i=anyInicial;i<=anyNaixement;i+=periodeAnyTraspas) {
	fase3 += "Any de trasp&agrave;s: "+ i;
	fase3 += "<BR>";
}

var esTraspas = (anyNaixement % periodeAnyTraspas == 0);
var tsi = anyNaixement + " s%iacute; &eacute;s any de trasp&agrave;s";
var tno = anyNaixement + " no &eacute;s any de trasp&agrave;s";
if (esTraspas) {
	fase3 += tsi;
}else {
	fase3 += tno;
}

document.getElementById("fase3").innerHTML=fase3;

//------
//FASE 4
//------

var diaNaixement = 20;
var mesNaixement = 2;

var fase4 = "El meu nom &eacute;s " + nom + " " + cognom1 + " " + cognom2;
fase4 += "<BR>";
fase4 += "Vaig n&eacute;ixer el " + diaNaixement+"/"+mesNaixement+"/"+anyNaixement;
fase4 += "<BR>";

if (esTraspas) {
	fase4 += tsi;
}else {
	fase4 += tno;
}

document.getElementById("fase4").innerHTML=fase4;

