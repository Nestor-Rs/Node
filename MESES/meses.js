// Pedimos al usuario que introduzca el número del mes
const mes = parseInt(prompt("Introduce el número del mes (1 al 12):"));

// Verificamos si el mes tiene 30 o 31 días
let dias;
if (mes == 2) {
  dias = "28 o 29";
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
  dias = "30";
} else {
  dias = "31";
}

// Mostramos el resultado al usuario
alert(`El mes ${mes} tiene ${dias} días.`);