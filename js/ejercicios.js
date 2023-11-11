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
}else {
    alert(resultado = numero1 + numero2);
}

/* ejercicio 7*/
let numero =  parseInt(prompt("ingrese un numero "));

if(numero > 0) {
    alert("el numero es positivo");
}else if(numero < 0) {
    alert("es negativo");
}else {
    alert("el numero el igual a cero");
}

/*ejercicio 8*/
let persona1 = prompt(" nombre persona 1");
let edad1 = parseInt(prompt("ingrese su edad "));
let persona2 = prompt(" nombre persona 2 ");
let edad2 = parseInt(prompt("ingrese su edad "));

if(edad1 > edad2) {
    alert(persona1 + " es mayor que " + persona2);
}else if(edad2 > edad1){
    alert(persona2 + " es mayor que " + persona1);
}else {
    alert(persona1 + " y " + persona2 + " tienen la misma eda");
}

/* ejercicio 9*/
let number = prompt("ingrese un numero");

if(number < 10) {
    alert("el numero es menor que 10");
}else if(number >= 10 && number <=20) {
    alert("es un numero entre 10 y 20");
}else {
    alert("el numero ingresado es mayor que 20");
}

/* ejercicio 10*/
let usuario = prompt("ingrese su usuario");
let contraseña = prompt("ingrese su contraseña ");

if(usuario === "admin" && contraseña === "12345") {
    alert("acceso permitido");
}else {
    alert("acceso denegado");
}

/* ejercicio 11*/
let camisas = parseFloat(prompt('cuantas camisas compro'));
let precio = 30000*camisas;


if(camisas >= 3) {
    alert(precio * 0.80);
}else {
    alert(precio * 0.90);
}

/* ejercicio 12 */

let nota = parseFloat(prompt("ingrese su nota final de la materia"));


if(nota >= 1.0 && nota <= 3.3) {
    alert("desempeño bajo");
}else if(nota >= 3.4 && nota <= 3.8) {
    alert("desempeño basico");
}else if(nota >= 3.9 && nota <= 4.4) {
    alert("desempeño alto");
}else if(nota >=4.5 && nota <= 5.0) {
    alert("desempeño superior");
}else {
    alert("nota invalida")
}