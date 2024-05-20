
/*let saludos = personas.map((nombre)=>`hola${nombre}`);
console.log(saludos);
console.log(personas);
saludos.map((hola)=>{
    console.log(hola);
});*/
 
/*let numeros = [101, 20, 60,50,12,0.5,1.5,12];
let sumas = numeros.map(num => num + 4);
console.log(sumas);

let resta = numeros.map(num1 => num1 - 4);
console.log(resta);

let multi = numeros.map(num1 => num1 * 4);
console.log(multi);

let div
let= numeros.map(num1 => num1 / 4);
console.log(div);

let personas =["erik","armando","pipu"["perez,alvarado"]];
let[ nom1,nom2,nom3,nom4,nom5,nom6]=personas;
let [ap1,ap2]=nom2;
console.log(`hola ${nom2}${ap1}`);

console.log(personas[1]);
*/

let estudiantes = [
    {
        "nombre": "erik",
        "apellido": "alv",
        "edad": 20,
        "carrera": "aun no lo se"
    },
    {
        "nombre": "ana",
        "apellido": "hernandez",
        "edad": 30,
        "carrera": "gestion"
    },
    {
        "nombre": "laura",
        "apellido": "hernandez",
        "edad": 40,
        "carrera": "turismo"
    }
];
estudiantes.map(({nombre,apellido,edad,carrera}))




const datos=(dato)=>{
    let {nombre,apellido,edad,carrera} =dato
    console.log(`
    tu nombre es :${nombre}
    tu apellido es :${apellido}
    tu edad es : ${edad}
    tu carrera es :${carrera}
    `);
}
