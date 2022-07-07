//Código para el Cuadrado
console.group("Cuadrado");                                          //Se utiliza para agrupar las impresiones del console.log

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4; 
console.log("el perimetro del cuadrado es igual a: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado; 
console.log("el área del cuadrado es igual a: " + areaCuadrado + "cm^2");

console.groupEnd();                                                     //Hasta aqui termina la primer agrupacion

//Código para el Triángulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;


console.group("Triángulo");

console.log(
    "Los lados del triángulo1 miden: " + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo3 
    + "cm "
);

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
console.log("El perimetro del triángulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo3 * alturaTriangulo)/2;
console.log("El área del Triángulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código para el Circulo
console.group("Circulos");

const radioCirculo = 4;
console.log("El radio del circulo es de: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del Circulo es de: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("Pi es de: " + PI);

const perimertroCirculo = diametroCirculo * PI;
console.log("El perimetro del Circulo es de: " + perimertroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es de: " + areaCirculo + "cm^2");

console.groupEnd();
