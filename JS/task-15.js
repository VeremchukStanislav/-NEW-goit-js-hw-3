// Запиши в переменную keys массив ключей собственных свойств объекта apartment,
// а в переменную values массив всех значений его свойств.
// Используй методы Object.keys() и Object.values().

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
const values = Object.values(apartment);

const newKeys = [];
const newValues = [];

for (const key of keys) {
    newValues.push(apartment[key]);
    newKeys.push(apartment[key]);
}

console.log(newKeys);
console.log(newValues);