// // function sumarDosNumeros( numero1, numero2 ){ //parametros
// //     let resultado = numero1 + numero2
// //     return resultado
// // }

// // let suma = sumarDosNumeros( 10, 5 ) //argumentos

// // console.log( suma )



// // // function sumAges(firstUserPhrase, SecondUserPhrase, ThirdUserPhrase){




// function sum() {



//     let usuarios = [ { name: 'Jaquelinne', edad:8 }, 
//             { name: 'Leo',edad:22  },
//             { name: 'Ulises', edad: 34 } ]


// 	const result = edad;
// 	// en lugar de usar console.log devolvemos la suma usando return
// 	return result;
// }

// // // function printSum() {
// // // 	// invocamos la función sum y almacenamos lo que retorna la variable result
// // // 	const total = sum();
// // // 	// imprimimos lo que contiene la variable result
// // // 	console.log(total); 
// // // }
// // // // invocamos la función printSum, para lograr que se ejecute todo el código que contiene
// // // printSum();


// // function concatenarTresCadenas(cadena1, cadena2,cadena3){
// //     console.log(cadena1+"" + cadena2+ "" + cadena3);
// // }

// // concatenarTresCadenas(" Estoy"," aprendiendo", " a programar");

// let suma=[]



// function agregarUsuario(usuario,siguienteUsuario){
//    suma.push(usuario)
//     siguienteUsuario()

// }



// function sumarEdades(){

  
// }

// agregarUsuario({nombre: "Ulises", edad:8}, sumarEdades)

// agregarUsuario({nombre: "Jaquelinne", edad:22}, sumarEdades)

// agregarUsuario({nombre: "Leo", edad:14},  function(){
 



//     let total=0

//     for(let i=0; i<suma.length; i++){
//         total +=suma[i].edad
//     }



//     console.log(`El total de las edades es de ${total}`)


//  })




const carrito=[

    {nombre:'Monitor 27',precio:500},
    {nombre:'Television',precio:100},
    {nombre:'Tablet',precio:200},
    {nombre:'Audifonos',precio:300},
    {nombre:'Teclado',precio:400},
    {nombre:'Celular',precio:700},
    
    ]


    // console.log(carrito.length);

    // for(let i=0; i<carrito.length; i++){
    //    console.log(carrito[i].precio)
    // }

    for(let producto of carrito){
        console.log(producto.precio)
    }