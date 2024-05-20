 // Obtener referencia al botón de procesar números
 const btnProcesarNumeros = document.querySelector('.btn-agregar-numeros');

 // Agregar evento de clic al botón de procesar números
 btnProcesarNumeros.addEventListener('click', () => {
     // Obtener los números ingresados por el usuario
     const numerosStr = document.querySelector('.numeros').value;
     const numeros = numerosStr.split(',').map(numero => parseFloat(numero.trim()));

     // Calcular estadísticas
     const media = calcularMedia(numeros);
     const mediana = calcularMediana(numeros);
     const moda = calcularModa(numeros);

     // Mostrar los resultados
     alert(`Media: ${media}`);
     alert(`Mediana: ${mediana}`);
     alert(`Moda: ${moda}`);
 });
 // Función para calcular la media
const calcularMedia = (numeros) => {
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / numeros.length;
}

// Función para calcular la mediana
const calcularMediana = (numeros) => {
    const sorted = numeros.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
        return sorted[middle];
    }
}

// Función para calcular la moda
const calcularModa = (numeros) => {
    const frecuencia = {};
    numeros.forEach(numero => {
        frecuencia[numero] = (frecuencia[numero] || 0) + 1;
    });
    let moda;
    let maxFrecuencia = 0;
    for (const numero in frecuencia) {
        if (frecuencia[numero] > maxFrecuencia) {
            moda = numero;
            maxFrecuencia = frecuencia[numero];
        }
    }
    return moda;
}

