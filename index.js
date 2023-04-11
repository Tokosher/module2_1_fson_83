// Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

// const genres = ['Jazz', 'Blues'];
// genres.push('Rock-N-Roll');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift())
// genres.unshift('Country', 'Reggae');
// console.log(genres)

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const valuesArray = values.split(' '); // ['8', '11']
// const side1 = Number(valuesArray[0]);
// const side2 = +valuesArray[1];
// const square = side1 * side2;
// console.log(square)

// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
//
// for (let i = 1; i <= fruits.length; i++) {
//     console.log(i, fruits[i - 1]);
// }

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
//
//
//
// const namesArray = names.split(','); // ['Jacob', 'William', 'Solomon', 'Artemis']
// const phonesArray = phones.split(','); // ['89001234567', '89001112233', '890055566377', '890055566300']
//
// let counterForIndex = 0;
// for (let phone of phonesArray) {
//     console.log(namesArray[counterForIndex])
//     console.log(phone)
//     counterForIndex += 1;
// }

// Додатковий приклад
// const numbers = [1, 2, 3, 4, 5];
//
// let counter = 0;
// for (const number of numbers) {
//     console.log(number, counter);
//     counter += 1;
// }

// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.
//
// const string = 'Welcome to the future';

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// const arrayOfStrings = string.split('');
// arrayOfStrings.reverse()
// const result = arrayOfStrings.join('');

// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
//
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
//
// const numbers = [2, 17, 94, 1, 23, 37];
// let min;
// console.log(min); // 1
