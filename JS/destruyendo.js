// const producto={
//     nombre: 'Monitor',
//     precio:'500',
//     disponible:true

// }


// // //Destructuring en objetos
// // /// para extraer nombre, precio, disponible

// const{nombre}=producto;

// console.log(nombre);


// // const{precio}=producto;

// // console.log(precio);


// // // const{nombre, disponible}=producto;

// // // console.log(disponible);

// // ///////////////////////////



// //  //Destructuring en numeros 

// //  const numeros=[10,20,30,40,50];

// //  const[,,,,quinto]=numeros;

// //  console.log(quinto);



// // ///restOperator

// // const numeros2 =[10,20,30,40,50];

// // const[primero, ...tercero]=numeros2;
// // console.log(tercero);

// // // Solo va mandar 20,30,40,50




// // const{precio}=carrito;
// // console.log(precio);


// // const carrito=[

// //     {nombre:'Monitor 27',precio:500},
// //     {nombre:'Television',precio:100},
// //     {nombre:'Tablet',precio:200},
// //     {nombre:'Audifonos',precio:300},
// //     {nombre:'Teclado',precio:400},
// //     {nombre:'Celular',precio:700},
    
// //     ]
    
// //     carrito.forEach(function(producto) {
// //         console.log(`precio:${producto.precio}`)
// //         })
 
    
// //     for(let i=0; i<carrito.length; i++){
    
// // console.log(`${carrito[i].nombre} - precio:${carrito[i].precio}`);
// //     }



// // carrito.forEach(function(producto) {
// // console.log(`${producto.nombre} - precio:${producto.precio}`)
// // })


/////////////////////////EJERCICIO ORDENAR POR SCORE///////////////


// function OrderUsersByScore(users){ //1

//        for(let i=0; i<3; i++){
          
//         let usuario=users[i]
    
//         if(usuario.score>=30){
    
//           } else if(usuario.score>50){
    
    
//           } else if(usuario.score=100){
    
//           }
    
//     console.log(usuario.score);

//        }
    
      
//     } 
    
//     //2
//     let usuarios = [ { name: 'Leo', email: 'leo@gmail.com', score: 100 }, 
//     { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
//     { name: 'Andrés', email: 'andres@gmail.com', score: 34 } ]
    
//        // come se ejecuta un meto??¿¿
    
//        OrderUsersByScore(usuarios);//3
//        console.log(usuarios);
    
// usuarios.forEach(function(usuarios){
// console.log(`score:${usuarios.score}`)
//         })
 
    
/////////////////////////EJERCICIO ORDENAR POR SCORE///////////////
    
    
     

// let arregloNumeros=[5,10,12,7,22]

// arregloNumeros.forEach(function(elementoActual){

// if((elementoActual%2)==0){

//    console.log(`${elementoActual} es par`) 

// } else {

//    console.log(`${elementoActual})es impar`)}})



//    ///// callback Desayuno

//    function prepararDesayuno(platillo,siguientePaso){
//       console.log(`Estoy preparando ${platillo} para desayunar`)
//       console.log('...39min despues...')

//       siguientePaso()
//    }


   
//    function servirDesayuno(){
//       console.log(`Sirviendo el desayuno que acaba de ser preparado`)

//    }



//    function ponerLunch(){
//       console.log(`Meter el desayuno en
//        el tupper para poderlos llevar como desayuno`)

//    }

//    prepararDesayuno(`Huevos revueltos`, servirDesayuno )
//    prepararDesayuno(`hot cakes`, ponerLunch)

///////////

// function sumAges(firstUserPhrase, SecondUserPhrase, ThirdUserPhrase) {

//    // get first age
//    /* TODO */


//    //  "Me llamo Erik y tengo 8 años"
//    //  "Me llamo Daniel y tengo 22 años"
//    //  "Me llamo José y tengo 14 años"
   

// // lastIndexof


// // split 
// }

// sumAges()



// CAUNDO UTILIZAMOS EN LE METODO 
//indexOf  selecionaremos cada elemento del arreglo por su indice.

//             //0          1         2
// const names=["FLORIN", "JAKE", "Alfonso"];

// console.log(names.indexOf("JAKE"));


// // SI QUEREMOS INTERCAMBIAR UN ELEMENTO POR OTRO

const names=["FLORENCIA", "JAKE", "Alfonso", "ULISES"];
 
const idx= names.indexOf("JAKE");


//USANDO UN IF PARA SABER SI HAY ALGUN ARREGLO LLAMADO  ULISES

names[idx]="ULISE";


if (idx > -1){
console.log('SI TENEMOS UN ULISES ');

} else {

   console.log('NO, NO LO TENEMOS')
}
console.log(names); 



// ///////lastIndexOf comienza desde el inicio hasta el ultimo elemento del array.

                //0              1         2        3
// const names=["FLORENCIA", "Alfonso", "ULISES", "JAKE"];
 
// const idx= names.lastIndexOf("JAKE");

// console.log(idx);

// En este caso saldra 3 porque JAKE es el ULTIMO elemento del INDICE.




// indexOf  Retornara el primer elemento del indice  en este caso el elemento 1



                //0             1         2         3

// const names=["FLORENCIA", "Alfonso", "ULISES", "JAKE"];
 
// const idx= names.indexOf("Alfonso");

// console.log(idx);



// /// SPLIT

const actividad="Estoy aprendiendo java Script Moderno";

console.log(actividad.split(" "))

const tweet="Estoy aprendiendo java Script Moderno";

console.log(tweet.split('#'))

