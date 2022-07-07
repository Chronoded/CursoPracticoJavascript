//Código para el Cuadrado
console.group("Cuadrado");                                          //Se utiliza para agrupar las impresiones del console.log

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

// console.log("el perimetro del cuadrado es igual a: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}  

// console.log("el área del cuadrado es igual a: " + areaCuadrado + "cm^2");

console.groupEnd();                                                     //Hasta aqui termina la primer agrupacion

//Código para el Triángulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo3 = 4;


console.group("Triángulo");

// console.log(
//     "Los lados del triángulo1 miden: " + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo3 
//     + "cm "
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
} 
// console.log("El perimetro del triángulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura)/2;
} 

// console.log("El área del Triángulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código para el Circulo
console.group("Circulos");

// const radioCirculo = 4;
// console.log("El radio del circulo es de: " + radioCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2;
} 

const PI = Math.PI;
console.log("Pi es de: " + PI);

function perimertroCirculo(radio){                              //LLamar funciones dentro de funciones
   const diametro = diametroCirculo(radio);
   return diametro * PI;
} 

function areaCirculo(radio){
    return (radio * radio) * PI;
} 
console.groupEnd();
