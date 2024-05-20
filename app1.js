/*
const mi_dato = (nombre,apellido,edad)=>{
    console.log(`
    nombre:${nombre},
    apellido:${apellido},
    edad:${edad}
    `);
}
//... dato sprit convetir todo lo que recibe en un arreglo 
const mi_dato2 = (...datos)=>{
    console.log(`
    nombre:${datos[0]},
    apellido:${datos[1]},
    edad:${datos[2]}
    `);
}
mi_dato("juan","perez",30);

const mi_dato3 = (...datos)=>{
    let [nombre,apellido,edad]=datos;
    console.log(`
    nombre:${datos[0]},
    apellido:${datos[1]},
    edad:${datos[2]}
    `);
    console.log(`
    nombre:${nombre},
    apellido:${apellido},
    edad:${edad},    
    `)
}

//con map
const mi_dato4=(...datos)=>{
    datos.map((dato)=>{
        if(Array.isArray(dato)){
            dato.map(data=>{
                console.log(data);
            });
        }else{
            console.log(dato)
        }
    });
}
console.log(["erik","hernandez",20,['a','b']]);

*/

const nombres = ["diego", "luisa", "laura", "pedro", "roberto", "julia"];
const apellido = ["lopez", "medina", "suarez", "ramirez", "solis"];
const carreras = ["sistemas", "gestion", "industrial", "turismo"];

// Desestructurar
const [nombre1, nombre2, nombre3, nombre4, nombre5, nombre6] = nombres;
const [apellido1, apellido2, apellido3, apellido4, apellido5] = apellido;
const [carrera1, carrera2, carrera3, carrera4] = carreras;

console.log("Contenido del arreglo 'nombres':", nombre1, nombre2, nombre3, nombre4, nombre5, nombre6);
console.log("Contenido del arreglo 'apellido':", apellido1, apellido2, apellido3, apellido4, apellido5);
console.log("Contenido del arreglo 'carreras':", carrera1, carrera2, carrera3, carrera4);

// Unir los tres arreglos en uno solo
const arregloCombinado = [...nombres, ...apellido, ...carreras];
console.log("Arreglo combinado:", arregloCombinado);

// Crear un objeto con los tres arreglos
const objetoArreglos = {
  nombres: nombres,
  apellido: apellido,
  carreras: carreras
};
console.log("Objeto con los tres arreglos:", objetoArreglos);


