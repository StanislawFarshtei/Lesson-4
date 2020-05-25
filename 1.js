/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// const person = {};

// Решение

// person.salary; // good salary

// exports.person = person;

const person = {
    get salary() {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() +1;
        const currentDay = today.getDate();

        const lastDayOfTheMonth = new Date( 
            currentYear,
            currentMonth,
            0,
        ).getDate();

        const string = (lastDayOfTheMonth - currentDay) > 20 
        ? true
        : false;

        if (string) {
            return 'good salary';
        } else { 
            return 'bad salary';
        }
    }
}
console.log(person.salary);


// const today = new Date();
// const date = today.getDate();
// const currentYear = today.getFullYear();
// const currentMonth = today.getMonth();
// const currentDay = today.getDate();

// const lastOfTheMonth = new Date( 
//     currentYear,
//     currentMonth,
//     0,
// ).getDate();

// if ((lastOfMonth - date) > 20) {
//     console.log('bad salary');
// } else {
//     console.log('good salary');
// }




const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();
const daysInCurrentMonth = new Date(
    currentYear,
    currentMonth,
    0,
).getDate();
const string = daysInCurrentMonth - currentDay > 20
    ? 'good salary'
    : 'bad salary';

console.log(string);



