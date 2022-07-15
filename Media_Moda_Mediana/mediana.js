function calcularMediaAritmetica(lista){
    
    const sumaLista = lista.reduce(                                          //sumar elementos de un array con metodo reduce
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


const lista1 = [100,200,500,4000000000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(num){
    if (num % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    
    const elem1 = lista1[mitadLista1-1];                            //agarra el numero de los dos elementos en la mitad y resta una posicion para sacar el primero
    const elem2 = lista1[mitadLista1];                                    

    const promedioelementos = calcularMediaAritmetica([
        elem1,
        elem2,
    ]);

    mediana = promedioelementos;

} else { 

    mediana = lista1[mitadLista1];

}