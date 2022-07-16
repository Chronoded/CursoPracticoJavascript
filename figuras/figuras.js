// //Código para el Cuadrado
// console.group("Cuadrado");                                          //Se utiliza para agrupar las impresiones del console.log

// function perimetroCuadrado(lado) {
//     return lado * 4;
// } 

// function areaCuadrado(lado){
//     return lado * lado;
// }  

// console.groupEnd();                                                 //Hasta aqui termina la primer agrupacion
                                                 
// //Codigo Triangulo
// console.group("Triángulo");

// function perimetroTriangulo(lado1,lado2,base){
//     return lado1 + lado2 + base;
//  } 

// function areaTriangulo(base, altura){
//     return (base * altura)/2;
// } 

// console.groupEnd();

// //Código para el Circulo
// console.group("Circulos");

// function diametroCirculo(radio){
//     return radio * 2;
// } 

// const PI = Math.PI;
// console.log("Pi es de: " + PI);

// function perimertroCirculo(radio){                              //LLamar funciones dentro de funciones
//    const diametro = diametroCirculo(radio);
//    return diametro * PI;
// } 

// function areaCirculo(radio){
//     return (radio * radio) * PI;
// } 
// console.groupEnd();


//Simplificacion de codigo con arrowFunctions

//Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

//Triangulo
const perimetroTriangulo = (lado1,lado2,base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

//Circulo
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimertroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => PI * radio **2;


//Aqui interactuamos con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;                                       //asi recibimos solo el valor y no toda la etiqueta

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;                                       

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const InputLado1 = document.getElementById("InputLado1");
    const lado1 = InputLado1.value
    const InputLado2 = document.getElementById("InputLado2");
    const lado2 = InputLado2.value
    const InputBase = document.getElementById("InputBase");
    const base = InputBase.value

    const perimetro = perimetroTriangulo(Number(lado1) , Number(lado2) , Number(base));
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const InputBase = document.getElementById("InputBase");
    const base = InputBase.value
    const InputAltura = document.getElementById("InputAltura");
    const altura = InputAltura.value

    const area = areaTriangulo(base,altura);
    alert(area);
}

//circulo
function calcularDiametro(){
const input = document.getElementById("InputRadio");
const value = input.value;

const diametro = diametroCirculo(value);
alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    
    const perimetro = perimertroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    
    const area = areaCirculo(value);
    alert(area);
}

