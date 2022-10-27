function discount(a) {
    let Amount;
    a === undefined ? Amount = this.amount : Amount = a; 
    return (b) => {
        let Personal;
        b === undefined ? Personal = this.personal : Personal = b;
        return (c) => {
            let Regional;
            c === undefined ? Regional = this.regional : Regional = c;
            return (d) => {
                let Quantitative;
                d === undefined ? Quantitative = this.quantitative : Quantitative = d;
                let result = ((Amount * (1 - Personal/100)) * (1 - Regional/100)) * (1 - Quantitative/100);
                return result.toFixed(0);
            }
        }
    }
}

/*
function discount(){

    let result = ((this.amount * (1 - this.personal/100)) * (1 - this.regional/100)) * (1 - this.quantitative/100);
    result = result.toFixed(0);
    return result;
}
*/

let mass = [];

mass.push(person1 = {
	amount: '24500',
	personal: '5',
	regional: '2',
	quantitative: '15',

    counting: discount,
}
);

mass.push(person2 = {
	amount: '66501',
	personal: '3',
	regional: '5',
	quantitative: '10',
}
);

mass.push(person3 = {
	amount: '35303',
	personal: '7',
	regional: '11',
	quantitative: '12',
}
);

mass.push(person4 = {
	amount: '15389',
	personal: '10',
	regional: '3',
	quantitative: '22',
}
);

mass.push(person5 = {
	amount: '23350',
	personal: '2',
	regional: '1',
	quantitative: '13',
}
);

console.log("Первая персона = " + person1.counting(25000)()()());                ////
console.log("Вторая персона = " + person1.counting.call(person2)()()(20));      //  вывод выбранной персоны с возможностью замены данных 
console.log("Четвёртая персона = " + person1.counting.call(person4)(5)()(11)); ////

for (let i = 0; i < mass.length; i++) { //Вывод массива с персонами и их суммами по умолчанию
    console.log(`Сумма Персоны №${i+1} = ${person1.counting.call(mass[i])()()()} руб.`);
}