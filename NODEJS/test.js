const calcularSueldo = require('./calcularSueldo');

const sueldoDiario = 1000; // Supongamos que el sueldo diario es de $1000
const sueldoNeto = calcularSueldo(sueldoDiario);

console.log(`El sueldo neto después de impuestos es: $${sueldoNeto}`);