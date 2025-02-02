/*let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero');
}*/
/*let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero');
}*/

/*let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert(mensajeDeBienvenida);*/

/*alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10')
let numeroSecreto = 4;
if (eleccion == numeroSecreto) {
    alert('Adivinaste');
}*/

/*let contraseniaDelSistema = "contraseniaPrueba!";

let contrasenia = prompt("Ingrese la contraseña del sistema:");

if (contrasenia == contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
}*/

/*alert('¡Bienvenida y bienvenido a nuestro sitio web!');
let nombre = 'Lua';
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert('¡Error! Completa todos los campos');
let mensajeDeError = '¡Error! Completa todos los campos';
alert(mensajeDeError);
nombre = prompt('Digite su nombre:');
edad = prompt('Digite su edad:');
if (edad >= 18) {
    alert('¡Puedes obtener tu licencia de conducir!');
}*/

/*let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
*/
/*
Este código realiza 
la comparación.
*/
/*
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición.
    alert(`Acertaste, el número es: ${numeroUsuario}`);
}else{
    //La condición no se cumplió.
    alert('Lo siento, no acertaste el número');
}
*/
/*
let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}
*/
alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto);
    alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + intento);
}
