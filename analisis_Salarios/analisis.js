//Funciones Helpers - Utils
function calcularMediaAritmetica(lista){
    
    const sumaLista = lista.reduce(                                          //sumar elementos de un array con metodo reduce
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(num){
    // if (num % 2 === 0) {
    //     return true;
    // }else{
    //     return false;
    // }
    return (num % 2 === 0);                                      //Se simplifica el if haciendolo desde el return(ya que la condition nos devuelve el bolean)
}

//calculadora de mediana
function medianaSalarios(lista){                                //Funcion que calculara la mediana de salarios
    const mitad = parseInt(lista.length / 2);                   //quitamos el decimal

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    }else{
        const personaMitad = lista[mitad];                      //agregamos la posicion en la mitad de mi lista a mi variable 
        return personaMitad;
    }
}


//Calculando mediana General
const salariosMex = mexico.map(                         //crea un nuevo array(salariosMex) donde aparecera el salario de cada persona
    function(persona){
        return persona.salary
    }
);

const salariosMexSorted = salariosMex.sort(                 //de la resta obtenemos el resultado para ordenar mediante el metodo sort
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralMex = medianaSalarios(salariosMexSorted);

//Mediana del top 10%                   
const spliceStart = (salariosMexSorted.length * 90) / 100;                      //multiplica la cantidad de elementos del array por 90 para decirle en donde empezara el splice
const spliceCount = salariosMexSorted.length - spliceStart;                     //se agarra la cantidad total del array menos la posicion donde empieza el 90%

const salariosMexTop10 = salariosMexSorted.splice(                              //El metodo pide 2 argumentos, uno para donde cortara y el otro cuantos cortara
    spliceStart,
    spliceStart
);                

const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log({
    medianaGeneralMex,
    medianaTop10Mex,
});