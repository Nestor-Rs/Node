// Definimos un objeto que asocia cada código de vino con su tipo y precio
const vinos = {
    "BLANCO1": ["blanco", 10],
    "BLANCO2": ["blanco", 15],
    "TINTO1": ["tinto", 20],
    "TINTO2": ["tinto", 25]
  };
  
  // Pedimos al usuario que introduzca el código del vino
  const codigo = prompt("Introduce el código del vino: ");
  
  // Comprobamos si el código está en el objeto
  if (vinos.hasOwnProperty(codigo)) {
    // Si está, obtenemos el tipo y precio del vino
    const [tipo, precio] = vinos[codigo];
    // Calculamos el descuento correspondiente
    let descuento = 0;
    if (tipo === "blanco") {
      descuento = 0.05;
    } else if (tipo === "tinto") {
      descuento = 0.1;
    }
    // Mostramos el descuento y precio final al usuario
    const precioFinal = precio * (1 - descuento);
    console.log(`Descuento: ${descuento * 100}%`);
    console.log(`Precio final: ${precioFinal}`);
  } else {
    // Si el código no está en el objeto, mostramos un mensaje de error
    console.log("El código introducido no es válido.");
  }