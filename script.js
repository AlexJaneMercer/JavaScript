
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

btn1.addEventListener('click', ()=> {
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

alert(" Объём куба = " + cubeVolume(res) + "\n Площадь куба = " + cubeSquare(res) + "\n Диагональ куба = " + cubeDiagonal(res));
})

