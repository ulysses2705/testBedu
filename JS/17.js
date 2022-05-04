// // let persona={

// // nombre:" Jaquelinne",
// // apellido:" Bautista",
// // edad: 19 ,

// // };

// // for(let propiedad in persona ){

// // console.log( propiedad + ":"+ persona[propiedad]);  // sale nombre y edad



// // } 


// let persona={

//     nombre:" Jaquelinne",
//     apellido:" Bautista",
//     edad: 19 ,
    
//     };
    

//     //VALUES DEVEULVE UN ARRAY CON LOS VALORES 
//     //CORRESPONDIENTES A LAS PROPIEDADES DE UN OBJETO


// // let propiedades = Object.keys(persona);
// // console.log(propiedades);

// let valores=Object.values(persona);
// console.log(valores);



/////////////////////////////////////////////////////////////////


// let carro = {

// color:'azul',

// puertas:5,

// modelo:'serie 5',

// seguro:true,

// combustible:'Gasolina',

// marca:"BWM",

// objeto:{

//     propiedad1:"valor1",
//     propiedad2:"valor2"

// },

// arreglo:[1,2,3],




// };

// let accederFuera3=carro['objetos']['propiedad2'];
// console.log(accederFuera3);


// console.log(carro);
// carro.color="mordado";
// console.log(carro);


// carro.puertas="3";
// console.log(carro);



// carro.año=2015;
// console.log(carro);


// let accederFuera = carro['combustible'];
// console.log(accederFuera);






/*function levantarParedes(siguientePaso){
    console.log('La casa esta en construcción')
siguientePaso(pintarCasa)
}

function agregarAcabados(ultimoPaso){
    console.log('Se estan agregando todos los acabados')
    ultimoPaso()
}

function pintarCasa(){
    console.log('Se pinta la casa')
    console.log('La casa ya es avitable')
}


function construirCasa(priemerPaso){
    priemerPaso(agregarAcabados)
}

construirCasa(levantarParedes)*/
/*

let carro={
    
    
    color:'negro',
    
  puertas:5,

seguro:true,

combustible:'Gasolina',

objetos:{
    propiedad1:'valor1',
    propiedad2:'valor2',
},

arreglo:[1,2,3],

};

let aceder=carro.puertas;

console.log(aceder);

let aceder2=carro['color'];
console.log(aceder2);

// acceder a objetos con corchete por fuera 
let ad = carro['objetos']['propiedad1']
console.log(ad)


//acceder a arreglos con punto.  

let fuera =carro.arreglo[1];
console.log(fuera);


// acceder con corchete

let fuera2=carro['arreglo'];
console.log(fuera2);

*/



const carrito=[

    {nombre:'Monitor 27',precio:500},
    {nombre:'Television',precio:100},
    {nombre:'Tablet',precio:200},
    {nombre:'Audifonos',precio:300},
    {nombre:'Teclado',precio:400},
    {nombre:'Celular',precio:700},
    ]
    
    
    for(let i=0; i<carrito.length; i++){
    console.log(`precio:
    ${carrito[i].precio}`) ;
    }