/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * 
 * 
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// const person = {};

// // Решение

// person.rate = 30;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
// person.salary;

// exports.person = person;

const person = {};

Object.defineProperties(person, 
    {
        rate: {
            value: 30,
            enumerable: false,
            configurable: false
        },
        salary: {
            enumerable: false,
            configurable: false,
            get() {
                if (person && person.hasOwnProperty('rate')) {
                    const now = new Date();
                    const today = now.getDate();
                    return today * this.rate  
                } else {
                    return 0; 
                }
            }   
        }
    }
);

console.log(person.salary);



