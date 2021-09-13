// comentario de una sola linea
/* comentario de multiples lineas */
/*
Definicion de Variables
    var
    const
    let
*/

/*
Tipos de Datos
    String,
    Number,
    Boolean,
    Undefined

    Object: 
        Null
        Literal Object
        Arrays

    function
*/

// String ("" - '' - ``)

let nombre = 'Luis "Profesor"';
let apellido = "Donald's";
let nombreCompleto = nombre + " " + apellido;
let nombreCompleto2 = `${nombre} ${apellido}`;
let texto = `Hola, ${nombre}, espero este todo bien. Lorem ipsum, dolor 
sit amet consectetur adipisicing elit. Quae, 
eligendi ea. Sit voluptatem dicta harum atque quas, unde nesciunt omnis, 
quasi blanditiis at sunt similique ratione magni? Quam, similique magnam?`;


// Number 1 -1 1.5
let edad = 40;
let temperatura = -4;
let precio = 1000.508989989998899;

// Boolean true false
let soltero = true;
let sinHijos = false;

// Undefined
let lastname;

console.log(typeof(lastname) === 'undefined');
console.log(typeof(edad) === 'number');
console.log(typeof(soltero));


// Null
let name = null;
let lastname2 = null;

console.log(typeof(name));

// Literal Object
let persona = {
    nombre: 'Pedro',
    apellido: 'Perez',
    edad: 50
}

console.log(persona.nombre);
console.log(persona["apellido"]);
console.log(typeof(persona));

// Arrays

let nombres = [
    "Eliana",
    "Martina",
    "Patricia",
    "Simone",
    "Michelle"
];

let valores = [true, {name: ''}, 34, function(){}, [1,2], ""];

console.log(nombres[3]);
console.log(nombres[nombres.length - 1]);

console.log(typeof(nombres));
let a = 4;
let b = 5;


let c = 10;
let resultado = 0;
function suma(num1, num2){
    //alert("La suma es: " + (a + b));
    let resultado = num1 + num2;
    return resultado;
}

console.log(resultado);

let resultado2 = suma(a, b);
alert("La suma es: " + resultado2);
console.log(resultado);

console.log(typeof(suma));