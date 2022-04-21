//esta definido como inmutable pero sus elementos son mutables al igual que los objetos 
const comida =[
    "tigrillo",
    "bolon mixto",
    "pizza",
    "chaulafan",
    "hamburguesa",

    function() {
        return "Bandera"
    }
]
comida["x"] = "Parillada";
console.log(comida)

//no hay que olvidar invocar con los parentesis.
//console.log(comida[5]())
//const desayuno = {...comida};, sus tres puntos reemplazan lo que contiene el arreglo comida

/*
//creamos un clon con corchetes
const desayunos = [...comida];
desayunos[3] = "yogurt"

const unionComidas = [...comida, ...desayunos];
console.log(unionComidas)
*/