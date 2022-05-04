// // let carro = {

// // color:'negro',

// // puertas:5,

// // modelo:'serie 3',

// // seguro:true,

// // combustible:'Gasolina',



// // // // ACEDER  A SUS VALORES POR FUERA CON PUNTO

// // // // let accederFuera=carro.puertas;
// // // // console.log(accederFuera);
// // // // ACCEDI A PUERTAS =5 


// // // // ACEDER A SUS PROPIEDADES CON CORCHETE


// // // // let accederFuera=carro['color'];
// // // // console.log(accederFuera);


// // // // let accederFuera2=carro['combustible'];
// // // // console.log(accederFuera2);


// // // // let accederFuera3=carro['seguro'];
// // // // console.log(accederFuera3);












// //  //segunda parte

// // objetos:{

// // propiedad1:'valor1',


// // propiedad2:'valor2'

// // },


// // // // Para acceder a los objetos.

// // // // let accederFuera=carro.objetos
// // // // console.log(accederFuera);

// // // // para acceder a las propiedades de los objetos

// // // // let accederFuera=carro.objetos.propiedad1;
// // // // console.log(accederFuera);

// // // // let accederFuera=carro.objetos.propiedad2;
// // // // console.log(accederFuera);

// // // // para acceder a las propiedades de los objetos con[]


// // // // let accederFuera2=carro['objetos']['propiedad1'];
// // // // console.log(accederFuera2);


// // // // let accederFuera3=carro['objetos']['propiedad2'];
// // // // console.log(accederFuera3);


// // arreglo:[1,2,3],


// // };

// // // /// Acceder a los arreglos

// // // // let accederFuera=carro.arreglo;
// // // // console.log(accederFuera);

// // // /// Acceder a las propiedades de los arreglos

// // // let accederFuera=carro.arreglo[1];
// // // console.log(accederFuera);
// // // // sale nuemro2

// // // // A NOTACION CORCHETE

// // // let accederFuera4=carro['arreglo'][2];
// // // console.log(accederFuera4);
// // // // sale nuemro3


// // ///////


// // let t1 = tabla;



// // for(let x=1;x<=100;x++){


// //     document.write(t1+"*"+x+"="+(t1*x)+"<br>");


// // }
// // console.log(t1);



// // for(let multiplicando=1; multiplicando<=10; multiplicando++){
// //     console.log('Tabla de multiplicar del ' +multiplicando);

    
// //     for(let multiplicador=1; multiplicador<=10; multiplicador++){
// //         let producto=multiplicando * multiplicador;

// //      console.log(multiplicando+ '*' +multiplicador+ '=' +producto);
  
// //     }


// // }


// ///////////////////////////


// //FUNCIONES

// // let phrase2 = "mi nueva frase"

// // let word2 ="gato"

// // let resultado2 = phrase2.indexof(word2)!== -1
// // console.log(resultado2)

//                         //   //parametros
//                         //   function sumarDosNumeros(numero1, numero2){
//                         //     //instruciones
                          
//                         // let resultado = numero1  + numero2
                        
//                         // return resultado
                          
//                         //   }
                        
//                         // let suma=sumarDosNumeros(10,5)
                        
                        
//                         // console.log(suma)
//                         // console.log(sumarDosNumeros(50,100))
                        
//                            // argumentos cuando la invoques
                        
// function OrderUsersByScore(users){ //1

//    for(let i= 0; i<3-1; i++){   //4
      

//       let usuario = users[i]  

// se le asigna el elemento que esta en el indice i y su valor es 0 en la primera vuelta

//// valor de i = 0
      
//       let siguienteUsuario = users[i+1] 

// esta variable contiene al siguiente 
////elemento del arreglo que se encuentra en el indice i+1  /1
      

//       let {score}=usuario


//       let siguienteScore = siguienteUsuario.score

      
      
//       if( score > siguienteScore){   

      
//          users[i] = siguienteUsuario

//                users[i+2]=usuario

//       }

//       if( score < siguienteScore)



//       console.log(score);

//       // console.log(usuarios[i].score);
      

//    }

  
// } 


// //2


// let usuarios = [ { name: 'Leo', email:'leo@gmail.com', score: 100 }, // 0
// { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },//1
// { name: 'Andrés', email: 'andres@gmail.com', score: 34 } ]//2

//// come se ejecuta un metoDO??¿¿




//    OrderUsersByScore(usuarios);//3

//    console.log(usuarios);


let phrase2 = "mi nueva frase"

let word2 ="gato"

let resultado2 = phrase2.indexof(word2)!== -1

console.log(resultado2)


//parametros

function sumarDosNumeros(numero1,numero2){

//instruciones
                          
let resultado = numero1  + numero2
return resultado
                          
                          }
let suma=sumarDosNumeros(10,5)

                        
console.log(suma)

// console.log(sumarDosNumeros(50,100))
                        