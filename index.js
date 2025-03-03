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
    let joinedArray = arr.join(', ');
    return '[' + joinedArray + ']';
    
}

function arrayMapi (arr, funct) {
    return arr.map(funct);
}

function eliminarDuplicados (arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}


// ARRAYS 2

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ['Hola', 'Mundo'];
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];


// FUNCIONES 2

function multiplicacion (a, b) {
    return a*b;
}

function division (a, b) {
    return a/b;
}

function esPar (number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function resta (a, b) {
    return a-b;
}

let arrayFunciones = [suma, resta, multiplicacion];


// MEZCLA DE ARRAYS Y FUNCIONES 2

function ordenarArray2 (arr) {
    return arr.sort(function(a, b) {
        return b - a; //de mayor a menor, si no sería a - b
    });
}

function obtenerImpares(arr) {
    let arrImpares = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arrImpares.push(arr[i]);
        }
    }
    return arrImpares;
}

function sumarArray(arr) {
    let result = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
    return result;
}

function multiplicarArray(arr) {
    let result = arr.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
    });
    return result;
}
