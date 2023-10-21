/* ejercicio 1 */
let edad = parseInt(prompt("ingrese su edad"));

if(edad >=18) {
    alert("eres mayor de edad");
}else {
    alert("eres menor de edad");
}

/* ejerciccio 2 */
let peso = parseInt(prompt("ingrese su peso"));

if(peso <=40) {
    alert("persona baja de peso");

}else if(peso >=41 && peso <=70) {
    alert("tienes un peso promedio");
}else {
    alert("persona con sobrepeso");
}

/* ejercicio 3 */
let a = parseInt(prompt("ingrese un valor numerico"));
let b = parseInt(prompt("ingrese otro valor numerico"));

if(a>b) {
    alert("a es mayor que b");
}else if(a<b) {
    alert("a es menor que b");
}else{
alert("a es igual que b");
}

/* ejercicio 4*/
let nota1 = parseInt(prompt("ingrese nota 1"));
let nota2 = parseInt(prompt("ingrese nota 2"));
let nota3 = parseInt(prompt("ingrese nota3"));

promedio = (nota1+nota2+nota3)/3
alert("su promedio es: " + promedio + " . ");

if(promedio >=6) {
    alert("aprobado");
}else {
    alert("desaprobado");
}

/*ejercicio 5*/
let dia = parseInt(prompt("ingrese un numero del 1 al 7"));
if(dia === 1) {
    alert("es lunes");
}else if(dia=== 2) {
    alert("es martes");
}else if(dia === 3) {
    alert("es miercoles");
}else if(dia === 4) {
    alert("es jueves");
}else if(dia === 5) {
    alert("es viernes");
}else if(dia === 6) {
    alert("es sabado");
}else if(dia === 7) {
    alert("es domingo");
}else {
    alert("escribio un numero fuera del rango, escriba un numero entre 1 y 7");
}

/*ejercicio 6*/
let numero1 = parseInt(prompt("ingrese numero 1"));
let numero2 = parseInt(prompt("ingrese numero 2"));
resultado = 0;

if(numero1===numero2) {
alert(resultado = numero1 * numero2);

}else if(numero1 > numero2) {
    alert(resutado = numero1 - numero2);
}