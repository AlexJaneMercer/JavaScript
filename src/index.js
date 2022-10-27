/**
 * Метод принимает на вход строку и возвращает число
 * value - передаваемаяя в метод строка
 *
 * менять имя функции нельзя,
 * создавать дополнительные функции можно
 */
 const stringToNumber = function (value) {

    let result = Number(value);

    return Object.is(result, NaN) ?  parseInt(value,10) : result;
  };
  
console.log(stringToNumber("42px"));

 export default stringToNumber;
  
