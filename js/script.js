/*
let nota = parseFloat(prompt("ingrese su nota final de la materia"));


if(nota >= 1.0 && nota <= 3.3) {
    alert("la nota final es: " +nota+ " desempeño BAJO");
}else if(nota >= 3.4 && nota <= 3.8) {
    alert("la nota final es: " +nota+ " desempeño BASICO");
}else if(nota >= 3.9 && nota <= 4.4) {
    alert("nota final es: " +nota+ " desempeño ALTO");
}else if(nota >=4.5 && nota <= 5.0) {
    alert("la nota final es: " +nota+ " desempeño SUPERIOR");
}else {
    alert("la nota ingresada no es valida")
}
*/

let usuario = prompt("ingrese su usuario");
let contraseña = prompt("ingrese su contraseña ");

if(usuario === "admin" && contraseña === "12345") {
    alert("acceso permitido");
}else if(usuario !== "admin" && contraseña === "12345") {
    alert("usuario incorrecto");
}else if(usuario === "admin" && contraseña !== "12345") {
    alert("contraseña incorrecta")
}else {
    alert("por favor registrarse")
    
}