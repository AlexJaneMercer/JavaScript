
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

btn1.addEventListener('click', ()=> {
    let a =  Number(prompt("Введите размер стороны куба: "));

    if(a == 0){
        alert("Быть этого не может! Повторите попытку!");
    }
    else{
        function cubeVolume(){
            let result = a*a*a;
            return result;
        }

        function cubeSquare() {
            let result = 6 * (a * a);
            return result;
        }

        function cubeDiagonal(){
            let result = a * Math.sqrt(3);
            return result;
        }

        alert(" Объём куба V = " + cubeVolume() + "\n Площадь куба S = " + cubeSquare() + "\n Диагональ куба d = " + cubeDiagonal());
    }
});

btn2.addEventListener('click', ()=> {

    let a = Number(prompt("Введите размер длины основания параллелепипеда: "));
    let b = Number(prompt("Введите размер ширины основания параллелепипеда: "));
    let h = Number(prompt("Введите размер высоты параллелепипеда: "));

    if(a == 0 || b == 0 || h == 0){
        alert("Быть этого не может! Повторите попытку!");
    }
    else{

        function Po(){
            return (a + b) * 2;
        }

        function Sbok(){
            return Po() * h;
        }

        function Sosn(){
            return a * b;
        }

        function V(){
            return Sosn() * h;
        }

        function S(){
            return 2 * Sosn() + Sbok();
        }

        alert("Периметр основания Ро =  " + Po() + " \nПлощадь боковой поверхности Sб = " + Sbok() + " \nПлощадь основания поверхности So = " + Sosn() + " \nОбъём параллелепипеда V = " + V() + " \nПлощадь параллелепипеда S = " + S());
    }
});