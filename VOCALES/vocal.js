function esVocal(c) {
    // Convertir el carácter a minúscula para comparar con las vocales en minúscula
    c = c.toLowerCase();
    
    // Verificar si el carácter es una vocal
    if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
      return true;
    }
    
    // Si no es una vocal, devolver false
    return false;
  }

console.log(esVocal('a')); // true
console.log(esVocal('E')); // true
console.log(esVocal('b')); // false
console.log(esVocal('z')); // false