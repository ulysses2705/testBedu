


const nodosParagraph=document.getElementsByTagName("p")
console.log(nodosParagraph[0].innerText)

nodosParagraph[0].innerText="Este es un nuevo texto añadido con JS"


nodosParagraph[1].textContent="Este es un nuevo texto añadido con JS"









































// COMO SE COMUNICAN LAS FUNCIONES
// primeraFuncion();

// function primeraFuncion(){
//     console.log('Inciando App...');
//     segundaFuncion();
// }

// function segundaFuncion(){
//     console.log('Verificando Datos');
//     terceraFuncion('Ulises');

// }

// function terceraFuncion(usuario){
//     console.log('Autenticado usuario... espere...');
//     console.log(`Usuario autenticado exitosamente Bienvenido:${usuario}`);
// }



// Encontrar un elemento usando Find - 
//Métodos para arreglos en Javascript
// EL METODO FIND RETORNA EL VALOR DEL 
//PRIMER ELEMENTO QUE CUMPLA LA CONDICION DEL TEST


// const numbers=[1,2,3,4,5,];

// const number=numbers.filter((element)=> element===3);
// console.log(number);



// metodo FIND

// const numbers=[1,2,3,4,5,];

// function test(element){
//     return element ===5;
// }

// const number=numbers.filter(test);
// console.log(number);


// const n = numbers.find(test);
// console.log(n);

// cuales son los elementos que tienen longitud en js
// strings y arrays

// const users=[
// {name:'Ulises', lastName:'Perez',email:'ulisespm@gmail.com', age:30, testResult:10},
// {name:'Jaquelinne', lastName:'Marquez',email:'jake@gmail.com', age:20, testResult:9},
// {name:'Antonio', lastName:'villar',email:'antonio@gmail.com', age:20, testResult:8},

// ];

// //-Cambiar el correo de antonio@gmail.com POR antonio27@hotmail.com

// //-Encontrar al usuario

// //-Actualizarlo

//         //***/
// function test(user){
//     return user.email==='antonio@gmail.com';
// }


// console.log(users); /// AQUI IMPRIMER TODOS LOS USUARIOS

// console.log('=============');

// const user = users.find(test);//***/
// user.email='antonio27@hotmail.com';
// console.log(users);

////////////////////////
/////////////////////////////////////////////////

// const countries=[
//     {id:1,name:'Mexico'},
//     {id:2,name:'Peru'},
//     {id:3,name:'Canada'},
// ];


// const students=[
//     {name:'Ulises',email:'ulisespm@gmail.com', score:7, countryId:2}, //México
//     {name:'Jaquelinne',email:'jake@gmail.com', score:9, countryId:3}, //Canada
//     {name:'Antonio',email:'antonio@gmail.com', score:9, countryId:2}, //PERU
//     ];


//     //Encontrar al primer estudiante del pais recivido en la funcion
//     // con una calificación =>9

//     function findStudent(countryName){

//         const country=countries.find((country)=> country.name ===countryName);

//         const countryId=country.id;

//         const student=students.find((user)=> user.countryId === countryId && user.score <=8);

//         console.log(student);


//     }

//     findStudent('Peru');