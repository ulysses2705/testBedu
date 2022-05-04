// const meses=['Enero','Febrero', 'Marzo', 'Abril' ,'Mayo', 'Junio'];


// // console.log(meses);

// // console.log(meses[4]); //Acceder a Mayo

// // Cuanto mide el arreglo?

// console.log(meses.length);


for(let i=0; i < meses.length; i++ ) {
console.log(meses[i]);
}


// // Agregar un elemento sin tocar el arreglo 


// // en que valores una valirable declarada con const se mueden modificar su valores???
// // en obejtos y arreglos 

// meses[0]='Nuevo Mes';
// meses[10]='Ultimo mes';

// console.log(meses);

// /////////////////////// Agregar elementos al arreglo al Final CON PUSHH

// const meses2=['enero','febrero','marzo'];

// meses2.push('abril');

// meses2.push('Mayo');

// console.log(meses2);



//.push agregar al final de un arreglo ALLLLFINAL DEL ARREGLO

//////////////////////////////////////////


const carrito=[];


const producto1={
    nombre:'Monitor de 32 pulgadas',
    precio:400
}



const producto2={
   nombre:'Celular',
    precio:500
}



const producto3={
    nombre:'Audifonos',
    precio:50
}


const producto4={
    nombre:'microfono',
    precio:50
}


carrito.push(producto1); // para agregar elementos al final del carrito

carrito.push(producto2);  // para agregar elementos al final del carrito

carrito.push(producto4);  // para agregar elementos al final del carrito

carrito.unshift(producto3);/// unshift para agregar un elemento al inicio del arreglo/ carrito




//  console.table(carrito);


// const nuevoArreglo = carrito.forEach(function(producto){
//     return `${producto.nombre} - precio: {producto.precio}`;
// })

// console.log(nuevoArreglo);


// FORMA DECLARATIVA


// let resultado;

// resultado=[...carrito, producto]; /// solo este sale monitor

// resultado=[...resultado, producto2]; // sale monitor y cel.


// resultado=[producto3,...resultado]; // audifonos, monitor, calular
//                                       //0           1         2
// console.table(resultado);

//*** POP ELIMINAR ULTIMO ELEMENTO DEL ARREGLO


// carrito.pop();
// console.table(carrito);
 

/// ***SHIEF PARA ELIMINAR DEL INICIO DEL ARREGLO


// carrito.shift();
// console.table(carrito);
// console.table(carrito);


carrito.splice(1,3);
console.table(carrito);

//1audifono. 2Monitor . 3celular. 4MICROFON

