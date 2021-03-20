// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника,
// а значение свойства это зарплата.
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
    let totalSalary = 0;
    const values = Object.values(salaries);
  // Пиши код ниже этой строки
for (const value of values) {
    totalSalary += value;
}
  // Пиши код выше этой строки
  return totalSalary;
}


console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

