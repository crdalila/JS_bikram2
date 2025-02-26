//ARRAYS

let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];


//FUNCIONES

function suma(a, b) {
    return a + b;
}

function potenciacion(a, b) {
    return (a**b);
}

function separarPalabras (str) {
    return str.split(' ');
}

function repetirString (str, num) {
    let newString = '';
    for (let i = 0; i < num; i++) {
        newString += str;
    }
    return newString;
}

function esPrimo (num) {
    for (let i = 2; i < num / 2; i++) { //2 es el primer número primo
        if (num % i === 0) { //significa que num tiene un divisor distinto de 1 y de sí mismo, así que no es primo
            return false;
        }
    }
    return true;
}


//MEZCLA DE ARRAYS Y FUNCIONES

function ordenarArray (arr) {
    return arr.sort(function (a, b) {
        return a - b; //si el resultado es negativo, a va antes
    }); //si es postivo, b va antes
}

function obtenerPares (arr) {
    return arr.filter(function (number) {
        return number % 2 === 0; //devuelve true
    });
}

function pintarArray (arr) {
    return arr.join(', ');
}

function arrayMapi (arr, funct) {
    return arr.forEach (funct);
}
