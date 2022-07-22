//Para sacar la media ponderada se multiplica cada numero del conjunto con su respectivo credito, sumar los resultados y dividirlos entre la suma de todos los creditos

// Pasos
// 1.-Definir el conjunto de numeros junto al peso de cada uno **
// 2.-Multiplicar cada numero de la lista por su peso 
// 3.-Sumar los elementos del arreglo multiplicados por su peso 
// 4.-Sumar todos los pesos
// 5.-hacer la division entre ambas sumas

//Media ponderada de calificaciones 
//paso 1
const notas = [
    {
        curso: "Aplicaciones moviles",
        nota: 80,
        creditos: 5,
    },
    {
        curso: "Aplicaciones web",
        nota: 100,
        creditos: 5,
    },
    {
        curso: "Taller emprendedores",
        nota: 85,
        creditos: 4,
    },
];

//paso 2
const notasConCreditos = notas.map(function(notasObject){                             //multiplica cada valor de su array por sus creditos
    return notasObject.nota * notasObject.creditos;
});

//paso 3
const sumaNotasConCreditos = notasConCreditos.reduce(function(sum = 0, valor){          //suma las multiplicaciones anteriores
    return sum + valor;

});

//paso 4                                                                                //Se suman los pesos(creditos)
const credits = notas.map(function(notasObject){                                        //se recorre el array y guarda los creditos en creditos
    return notasObject.creditos;
});

const sumaDeLosCreditos = credits.reduce(function(sum = 0, valor){                      //recorre el arreglo y suma los elementos
    return sum + valor;
});

//Paso 5
const promedioPonderado = sumaNotasConCreditos / sumaDeLosCreditos;