const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {};

lista1.map(                                                 //map recorrera el array,se envia elem, el if checa si ya esta, y si si, agrega uno, en caso de que no, agrega por primera vez
    function(elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1; 
        }else{
            lista1Count[elemento] = 1;
        }
    }
);

const listaArray = Object.entries(lista1Count).sort(              //convierte el objeto en un array
    function(elementoA, elementoB) {
       return elementoA[1] - elementoB[1]; 
    }
)

const moda = listaArray[listaArray.length - 1];

