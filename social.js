// const users = [

//     {
//         name: 'Erik',
//         age: 29,
//         email: 'erik@academlo.com',
//         social: [
//             { name: 'facebook', url: 'facebook/erik' },
//             { name: 'twitter', url: 'twitter/erik' }
//         ],
//         gender: 'Male'
//     },

//     {
//         name: 'Georg',
//         age: 33,
//         email: 'georg@academlo.com',
//         social: [
//             { name: 'facebook', url: 'facebook/georg' },
//             { name: 'twitter', url: 'twitter/georg' }
//         ],
//         gender: 'Male'
//     },

//     {
//         name: 'Andrea',
//         age: 42,
//         email: 'andrea@hotmail.com',
//         social: [
//             { name: 'facebook', url: 'facebook/andrea' },
//             { name: 'twitter', url: 'twitter/andrea' }
//         ],
//         gender: 'Female'
//     },

//     {
//         name: 'Oscar',
//         age: 31,
//         email: 'oscar@academlo.com',
//         social: [
//             { name: 'facebook', url: 'facebook/oscar' },
//             { name: 'twitter', url: 'twiter/oscar' }
//         ],
//         gender: 'Male'
//     },

//     {
//         name: 'Sandra',
//         age: 22,
//         email: 'Sandra@uaq.mx',
//         social: [
//             { name: 'facebook', url: 'facebook/sandra' },
//             { name: 'twitter', url: 'twitter/sandra' }
//         ],
//         gender: 'Female'
//     },
// ]

// // const{social}=users; 
// // console.log(social);


// // let emails=[]
// //  for( let i = 0; i < users.length; i++ ){
// // let email = users[i].email
// // emails.push( email )
// // }
// // console.log( emails )



// function polulateArray(){


// }

// suma de 3 cantidades de arreglos

// function arraySumValues(array){ let suma=array[0]+array[1]+array[2] 
//     return suma} 
//     let numeros=[3,3,3]; 
//     console.log(arraSumValues(numeros));



// let arregloNumeros=[5,10,12,7,22]

// arregloNumeros.forEach( function(elementoActual,indice,array){
//     // console.log(elementoActual,indice,array)//para recorrer todo el arreglo



// });


// arregloNumeros.forEach( function(elementoActual){
 

    // if((elementoActual%2)==0){

    //     console.log(`${elementoActual} es par`)
    // }else{
    //     console.log(`${elementoActual} es inpar`)
    //     }

    // }); // genera pares e inpares


//No devuelve nuevo arreglo

//     let retornoForEach = arregloNumeros.forEach(elementoActual=>{
//           if((elementoActual%2)==0){
//           console.log(`${elementoActual} es par`)
//     }else{
//         console.log(`${elementoActual} es inpar`)
//     }
//     })

// console.log(retornoForEach);

// // map devuelve un nuevo arreglo 

// let retornoMap=arregloNumeros.map(elementoActual => elementoActual*2)
// console.log(retornoMap);

// // utilizamos map
// // cuando queremos retornar algo de un arreglo ya existente

// let retornoFilter=arregloNumeros.filter(elementoActual=>(elementoActual%2)==0)
// console.log(retornoFilter)



// function funcionFiltrarPares(arreglo){
//     let nuevoArreglo=[]
//     for(let i=0;i<arreglo.length; i++){
//         if((arreglo[i]%2)==0){
//             nuevoArreglo.push(arreglo[i])
//         }
//     }

//     return nuevoArreglo
// }




// let retornoFind=arregloNumeros.find(elementoActual=>elementoActual >10)

// console.log(retornoFind);


// function arraySumValuesLoop(array){

// let maxElements=array.length

// let suma=0

// for(let i=0; i<maxElements; i++){

//     suma+=array[i];
// }

// return suma

// }

// let numeros=[3,3]


// console.log(arraySumValuesLoop(numeros))


// function arraySumValues(array){

//     let suma=array[0]+array[1]
//     return suma

// }

// let numeros=[9,9]


// console.log(arraySumValue(numeros));


let soldado={
edad:'20',
nacionalidad:'Mexicana',
color:'blanco',

rango:'cabo'

}

console.log(soldado);

const{nacionalidad}=soldado;
console.log(nacionalidad);