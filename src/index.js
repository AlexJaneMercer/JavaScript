/**
 * Метод принимает на вход строку и возвращает число
 * value - передаваемаяя в метод строка
 *
 * менять имя функции нельзя,
 * создавать дополнительные функции можно
 */
 const stringToNumber = function (value) {

    let result;

    value === "" ? result = 0 : result = parseInt(value,10);

    return result;
  };
  
console.log(stringToNumber("42px"));

 export default stringToNumber;
  