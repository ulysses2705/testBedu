function sumAges(firstUserPhrase, SecondUserPhrase, ThirdUserPhrase) {

let indice1=firstUserPhrase.indexOf("tengo")
    
let indice2=SecondUserPhrase.indexOf("tengo")

let indice3=ThirdUserPhrase.indexOf("tengo")

console.log(indice1,indice2,indice3)



let persona1=firstUserPhrase.substring(indice1)
console.log(persona1)

let persona2=SecondUserPhrase.substring(indice2)
console.log(persona2)

let persona3=ThirdUserPhrase.substring(indice3)
console.log(persona3)




let edad1=persona1.split(" ")

console.log(edad1)

console.log(edad1[1])

let edad2=persona2.split(" ")
console.log(edad2[1])


let edad3=persona3.split(" ")
console.log(edad3[1])



const total = +edad1[1] + +edad2[1] + +edad3[1]
console.log(total);


}


const usuario1="Me llamo Erik y tengo 67 años";
const usuario2="Me llamo Daniel y tengo 98 años";
const usuario3="Me llamo Jose y tengo 66 años";



sumAges(usuario1, usuario2, usuario3);
console.log(sumAges);



// un string es un arreglo de caracteres por






