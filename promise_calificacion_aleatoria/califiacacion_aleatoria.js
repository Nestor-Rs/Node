function generarCalificacion() {
    return new Promise((resolve, reject) => {
      const calificacion = Math.floor(Math.random() * 101); // Generar una calificación aleatoria entre 0 y 100
      if (calificacion >= 60) {
        resolve(calificacion); // Si la calificación es mayor o igual a 60, se resuelve la promesa con la calificación generada
      } else {
        reject(calificacion); // Si la calificación es menor a 60, se rechaza la promesa con la calificación generada
      }
    });
  }

  const aprobado=(calificacion) => {
    console.log(`El estudiante ha aprobado con una calificación de ${calificacion}.`);
  };
  const reprobado=(calificacion) => {
    console.log(`El estudiante ha reprobado con una calificación de ${calificacion}.`);
  };

  generarCalificacion().then(aprobado,reprobado);