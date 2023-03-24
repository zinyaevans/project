"use strict"

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам есть 18 лет?', '18');
// console.log(typeof(answer));

//вся информация от прользователя приходит в виде строк
//типы данных можно преобразовывать

const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);
console.log(typeof(answers));

//Интерполяция, конкатенация

const category = 'toys';
console.log('https://someurl.com/' + category + '/' + '4');

console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';
alert(`Привет, ${user}`);

// Операторы

console.log(4 + +'5'); // унарный + перед строкой переводит строку в число

let incr = 10,
    decr = 10;

// incr++; постфиксная форма - сначала фозвращает старое значение, а после учеличивает и уменьшает
// decr--;

console.log(++incr); // префиксная форма изменяет значение и возвращает новое
console.log(--decr);

console.log(5%2);

console.log(2*4 === '8'); // === строгое равенство

// && и
// || или

const isChecked = false,
    isClose = true;

console.log(isChecked || !isClose); // ! - оператор отрицания

