const calcularSueldo = (sueldoDiario) => {
    const IVA = 0.16; // Impuesto del 16%
    const sueldoBruto = sueldoDiario * 30; // Sueldo bruto mensual (asumiendo 30 días)
    const impuesto = sueldoBruto * IVA; // Impuesto a pagar
    const sueldoNeto = sueldoBruto + impuesto; // Sueldo neto después de impuestos
    
    return sueldoNeto;
  };
  
  module.exports = calcularSueldo;