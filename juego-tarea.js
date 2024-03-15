//NOMBRES E INGRESO
//conductor
let persona1 = prompt("Ingrese el nombre del conductor")
console.log("el nombre del conductor es: ",persona1)
let numCaracteres1 = persona1.length;

//copiloto
let persona2 = prompt("Ingrese el nombre del copiloto")
console.log("el nombre del copiloto es: ",persona2)
let numCaracteres2 = persona2.length;

//CONDICIONES
if (numCaracteres1 > numCaracteres2) {
    alert(`El conductor tiene el nombre mas largo, tiene ${numCaracteres1} caracteres`);
} else if (numCaracteres1 < numCaracteres2){
    alert(`Parece que el copiloto tiene el nombre mas largo, tiene ${numCaracteres2} caracteres`);
} else {
    alert(`Wow, ambos tienen nombres igualmente largos, ${numCaracteres1} caracteres`);
}

//BUCLES
let conductor = "";
for (let i=0;i<numCaracteres1;i++) {
    conductor += persona1[i].toUpperCase() +" ";
}

console.log(conductor);