let res = prompt("Введите размер стороны куба: ");

function cubeVolume(a){
    let result = a*a*a;
    return result;
}


function cubeSquare(a) {
    let result = 6 * (cubeVolume(a) * cubeVolume(a));
    return result;
}

function cubeDiagonal(a){
    let result = a * Math.sqrt(3);
    return result;
}

alert("Объём куба = " + cubeVolume(res) + " Площадь куба = " + cubeSquare(res) + "Диагональ куба = " + cubeDiagonal(res));
