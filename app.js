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
/*alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto);
    alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + intento);
}*/
/*const numero = prompt("Introduce un número:");

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}*/

/*alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
*/
/*
let diaDeLaSemana = prompt("Qué día de la semana es:");
console.log(diaDeLaSemana);
if (diaDeLaSemana == "Sábado" || diaDeLaSemana == "Domingo") {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}

let numero = prompt("Introduce un número:");
console.log(numero);
if (numero > 0) {
  alert('Número positivo');
} else if (numero < 0) {
  alert('Número negativo');
} else {
  alert('El número es cero');
}

let puntuacion = 105;
console.log(puntuacion);
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}

let saldoCuenta = 100;
alert(`Tu saldo es de ${saldoCuenta}`);

let nombreUsuario = prompt("Ingresa tu nombre de usuario:");
alert(`Bienvenido ${nombreUsuario}`);
*/

/*
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez'

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

  console.log(numeroUsuario);

/*
Este código realiza 
la comparación.
*/
/*
  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición.
    alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    //incrementamos el contador cuando no acierta
    intentos = intentos + 1;
    palabraVeces = 'veces';
    //La condición no se cumplió.
    //alert('Lo siento, no acertaste el número');
  }
}*/

/*
let contador = 1;

while (contador < 4) {
  console.log('Ejecutando la iteración ' + contador);
  contador = contador + 1;
}
*/

/*
let cantidadNumeros = prompt('Ingrese la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = cantidadNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Ingrese el numero:'));
    contador--;
    suma += numero;
    alert(`Numero ${numero}, Suma ${suma}, Contador ${contador}`);
}

let promedio = suma / cantidadNumeros;

console.log(promedio);
*/

/*let contador = 1;
while (contador <= 10) {
console.log(contador);
contador++;
}
*/
/*
let contador = 10;
while (contador >= 0) {
console.log(contador);
contador--;
}
*/
/*
let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}
*/
/*
let numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
console.log(contador);
contador++
}
*/
/*
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez'

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
  console.log(numeroUsuario);

*/
/*
Este código realiza 
la comparación.
*/
/*
  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición.
    alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    //incrementamos el contador cuando no acierta
    intentos = intentos + 1;
    palabraVeces = 'veces';
    if(intentos>3){
      alert('Llegaste al máximo de intentos');
      break;
    }
    //La condición no se cumplió.
    //alert('Lo siento, no acertaste el número');
  }
}
*/
/*
let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;
console.log(numeroSecreto);
while (intentos < 5) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  intentos++;
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}*/

let numeroSecreto = Math.floor(Math.random() * 10);
console.log(numeroSecreto);
for (let intentos = 0; intentos < 5; intentos++) {
  console.log(intentos);
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}
