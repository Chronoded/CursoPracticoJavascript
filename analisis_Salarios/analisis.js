function calcularMediaAritmetica(lista){
    
    const sumaLista = lista.reduce(                                          //sumar elementos de un array con metodo reduce
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

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

function esPar(num){
    // if (num % 2 === 0) {
    //     return true;
    // }else{
    //     return false;
    // }
    return (num % 2 === 0);                                      //Se simplifica el if haciendolo desde el return(ya que la condition nos devuelve el bolean)
}

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

console.log(medianaSalarios(salariosMexSorted));