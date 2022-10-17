
let bankBalance = Number(prompt("Введите количество денежных средств на Банковском Счету (в $): ")); //баланс банковского счёта
const phonePrice = Number(prompt("Введите цену телефонов (в $): ")); //стоимость телефона
const phoneAccessories = Number(prompt("Введите цену аксессуаров (в $): ")); //стоимость аксессуаров
const tax = Number(prompt("Введите размер налога (в %): ")) / 100; //налог в %

let firstBalance = bankBalance.toFixed(2) + "$"; //начальный баланс

if(phonePrice <= 0 || phoneAccessories <= 0 || tax < 0 || bankBalance < 0){ //проверка вводных данных
    alert("Быть такого не может! Повторите попытку.");
}
else{

function taxPrice(){ 
    return (phoneAccessories + phonePrice) * tax; //величина налога на телефон с аксессуаром
}

let phoneCount = 0;
let accesoriesCount = 0;

let phoneResult = 0;
let accesoriesResult = 0;

while(bankBalance > 0){
    if(bankBalance >= (phonePrice + phoneAccessories + taxPrice())){

        console.log(bankBalance);
        bankBalance = bankBalance - (phonePrice + phoneAccessories + taxPrice());
        phoneResult += (phonePrice + (phonePrice * tax));
        accesoriesResult += (phoneAccessories + (phoneAccessories * tax));
        phoneCount++;
        accesoriesCount++;
    }
    else{
        if(bankBalance >= (phoneAccessories + (phoneAccessories * tax))){
           
            //console.log('Денег на закупку телефонов с аксессуарами не хватает, докупаем аксессуары на остаточные средства. ');
            bankBalance -= (phoneAccessories + (phoneAccessories * tax));
            accesoriesResult += (phoneAccessories + (phoneAccessories * tax));
            accesoriesCount++;
        }
        else{
            break;
        }
    }
}

function displayResult(){

    const accesoriesTotalPrice = accesoriesResult.toFixed(2) + "$";
    const phoneTotalPrice = phoneResult.toFixed(2) + "$";
    const residualBankBalance = bankBalance.toFixed(2) + "$" ;
    
    alert(
    "\nНачальный Баланс : " + firstBalance +   
    "\nКол-во телефонов : " + phoneCount + 
    "\nКол-во аксессуаров : " + accesoriesCount + 
    "\nОбщая цена аксессуаров : " + accesoriesTotalPrice +
    "\nОбщая цена телефонов : " + phoneTotalPrice +
    "\nОстаточный Баланс : " + residualBankBalance);
}

displayResult();

}