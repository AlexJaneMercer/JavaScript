const Person = {
    personConstructor: function (name, amount, quantitative) {
        this.name = name;
        this.amount = amount;
        this.quantitative = quantitative;
        this.discountPersonal = discountPersonal;
        return this;
    }
}

const person1 = new Person.personConstructor("Vasya", "24500", "5");
const person2 = new Person.personConstructor("Alex", "35500", "8");
const person3 = new Person.personConstructor("Masha", "55000", "20");
const person4 = new Person.personConstructor("Sveta", "11000", "12");

function calcDiscountValue (value) {
    let personalDiscont = 1 - (value / 100);
        return personalDiscont.toFixed(2);
}

// calc Personal Disount by Sum of money 
function discountPersonal() {
    if ( this.amount < 15000) {
        return calcDiscountValue(10);
    } else if (this.amount >= 15000 && this.amount < 50000) {
        return calcDiscountValue(15);
    } else if (this.amount >= 50000) {
        return calcDiscountValue(19);
    } 
}

// calc Quantative discount by items buy
function quantitativeDiscount() {
    if (this.quantitative < 3) {
        return calcDiscountValue(3);
    } else if (this.quantitative >= 3 && this.quantitative < 10) {
        return calcDiscountValue(5);
    } else if (this.quantitative >= 10) {
        return calcDiscountValue(10)
    } 
}

// Personal Discount
const getVasyaPersonal = discountPersonal.bind(person1);
const getAlexPersonal = discountPersonal.bind(person2);
const getMashaPersonal = discountPersonal.bind(person3);
const getSvetaPersonal = discountPersonal.bind(person4);

// Discounts in Regions
const discountInPoland = calcDiscountValue(3);
const discountInGrece = calcDiscountValue(6);
const discountInHungary = calcDiscountValue(4.3)
const discountInUSA = calcDiscountValue(9.2);

// Person quantitative
const getVasyaQuantative = quantitativeDiscount.bind(person1);
const getAlexQuantative = quantitativeDiscount.bind(person2);
const getMashaQuantative = quantitativeDiscount.bind(person3);
const getSvetaQuantative = quantitativeDiscount.bind(person4);

function calcAllDiscount(regional) {
    return function(amount) {
        return function(personal) {
            return function(quantitative) {
                let result = regional * amount * personal * quantitative;
                return result.toFixed(0)
            }
        }
    }
}

// Common discount in Countries
const commonDiscountinPoland = calcAllDiscount(discountInPoland);
const commonDiscountinGreece = calcAllDiscount(discountInGrece);
const commonDiscountinHugrary = calcAllDiscount(discountInHungary);
const commonDiscountinUSA = calcAllDiscount(discountInUSA);

console.log("Сумма Васи со скидкой в Польше = " + commonDiscountinPoland(person1.amount)(getVasyaPersonal())(getVasyaQuantative()) + " руб."); 
console.log("Сумма Алекса со скидкой в Греции = " + commonDiscountinGreece(person2.amount)(getAlexPersonal())(getAlexQuantative()) + " руб.");
console.log("Сумма Маши со скидкой в Венгрии = " + commonDiscountinHugrary(person3.amount)(getMashaPersonal())(getMashaQuantative()) + " руб.");
console.log("Сумма Светы со скидкой в США = " + commonDiscountinUSA(person4.amount)(getSvetaPersonal())(getSvetaQuantative()) + " руб.");