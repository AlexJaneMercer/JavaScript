let bankBalance = prompt("Введите количество денежных средств на Банковском Счету : "); //баланс банковского счёта
const phonePrice = prompt("Введите цену телефонов : "); //стоимость телефона
const phoneAccessories = prompt("Введите цену аксессуаров : "); //стоимость аксессуаров
const tax = prompt("Введите процентный размер налога : "); //налог в %


function taxPrice(){ 
    return (phoneAccessories + phonePrice) * tax; //величина налога на телефон с аксессуаром
}

let phoneCount = 0;
let accesoriesCount = 0;

let phoneResult = 0;
let accesoriesResult = 0;


console.log("Начальный Баланс : " + bankBalance);

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
            //console.log(bankBalance);
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

    const accesoriesTotalPrice = accesoriesResult.toFixed(2);
    const phoneTotalPrice = phoneResult.toFixed(2);
    const residualBankBalance = bankBalance.toFixed(2); ;
    
    alert("\nКол-во телефонов : " + phoneCount +
    "\nКол-во аксессуаров : " + accesoriesCount +
    "\nОбщая цена аксессуаров : " + accesoriesTotalPrice +
    "\nОбщая цена телефонов : " + phoneTotalPrice +
    "\nОстаточный Баланс : " + residualBankBalance);
}

displayResult();


console.log("Кол-во телефонов : " + phoneCount);
console.log("Кол-во аксессуаров : " + accesoriesCount);
console.log("Общая цена аксессуаров : " + accesoriesResult);
console.log("Общая цена телефонов : " + phoneResult);
console.log("Остаточный Баланс : " + bankBalance);