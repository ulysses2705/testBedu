const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

// // // expected output: Array ["a", "b", "c", "d", "e", "f"]



// // var miNombre = "Diego"; 

// // function nombre() {
// //     miNombre = "Alfonso";
// //     return miNombre;
// // }

// // nombre();

// // console.log(miNombre);


// // TIPOS DE FUNCIONES

// //DECLARATIVAS

// // function miFuncion(){
// //     return 3;
// // }

// // miFuncion();


// //////////////////////////////////////////////////////

// // // EXPRESIVAS también llamadas funciones anonimas

// // var miFuncion=function(a,b){
// //     return a+b;
// // }

// // miFuncion();


// // DECLARATIVA 

// // function saludarEstudiante(estudiante){
// //     console.log(`Hola ${estudiante}`);
// // }

// // saludarEstudiante("ULISES");

// // saludarEstudiante("JAQUELINNE");

// // saludarEstudiante("ALFONSO");

// ///////////////////////////// 

// ///HACIENDO UNA FUNCION QUE NOS RETORNE SI USAR CONSOLE.LOGE

function sumar(a,b){
    let resultado = a+b; /// variable
    return resultado;
}

sumar(1,2);

// /// bueno sale  3 a la verga


// // OTRA FORMA

// function sumar(a,b){
//     return a + b;
// }

// sumar(1,2)

// /// 3

// // Que es el SCOPE

// let miNombre="Ulises"; // scope global

// function nombre(){  ///*

//     let miApellido="Perez"; // scope local
//     console.log(miNombre+ " " + miApellido);

// }
// ///*
// nombre(); // scope global


// ///Hoisting es cuando las varibales y las funciones 
// // se prosesan antes de que se ejecute cualquier tipo de codigo 


// console.log(Nombre);
// let Nombre="Ulises";


// ///////////

// let nombre = undefined;
// console.log(nombre);


// ///ejemplo 2

// var nombre =undefined;

// console.log(miNombre);

// miNombre="Ulises";

// /// ejemplo 3

// var nombre =undefined;

// console.log(miNombre + "Soy el Hoisting");

// miNombre="Ulises";// *

// // undefined soy el hoisting

// "Ulises" //*


// /// las funciones se declaran antes que las Variables


// hey();

// function hey(){

//     console.log("Hola" + miNombre);
// }

// let miNombre="Ulises"


// // Si mandamos a llamar una funcion antes de declararla
// // obtendremos el resultado que esperamos siempre y 
// //cuando las varibales esten declaradas e inicializadas 
// //antes de llamar a la funcion


// let name="Ulises";
// let age=32;

// obj={name:name, age:age};

// obj2={name,age};

// console.log(obj2);



// //// ARROW FUCTIONS


// const names=[


//     {name: "Ulises", age:27},

//     {name: "Jake", age:35}

// ]

// ///PRIMERA forma de las arrowfuctions

// let listOfNames2 = names.map(item => console.log(item.name));


// /// SEGUNDA


// const listOfNames3= (name, age , country)=> {    



//     //// CODIGO
//          }



//          ////// TERCERA FORMA 

//          const lisOfNames4=name => { 

//             ///// CODIGO

//          }




//  //// 5 FORMA
 
//  const square = numero => num * num;


 ///PROMESAS CON ARROW FUCTIONS//////////////

//  const helloPromises=() => {

// return new Promise((resolve,reject) =>{

//     if (false){

//         resolve( "Hey");

//     }else {

//         reject("Ups!!");
//     }

// });

// }

// helloPromises()
// .then(response=>console.log(response))
// .catch(error =>console.log(error));


//SPREAD OPERATOR

let team1 =["ulises", "Jake", "Leonel"];

let team2 =["Erika", "claudia", "mayra"];

let alumnos=[,...team1, ...team2,"Antonio"];

console.log(alumnos);