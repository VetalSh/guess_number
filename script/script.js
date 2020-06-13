'use strict';

// Проверка на число
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


function game() {
  let attemptsCount = 0; // Счетчик попыток

  let hiddenNumber = randomInteger(1, 99);  // Загаданное число 
  console.log('hiddenNumber: ', hiddenNumber);

  // Функция угадывания числа
  function toGuess() {
    let enteredNumber = prompt('Угадай число от 1 до 100?');
    if (enteredNumber === null) {
      alert('Игра завершена принудительно');
    } else {
      if (isNumber(enteredNumber)) {
        const guessNumber = +enteredNumber;
        if (guessNumber > hiddenNumber) {
          alert('Загаданное число меньше');
          attemptsCount++;
          console.log('attemptsCount: ', attemptsCount);
          if (attemptsCount < 3) {
            alert('Попробуйте угадать снова!');
            toGuess();
          }
        } else if (guessNumber < hiddenNumber) {
          alert('Загаданное число больше');
          attemptsCount++;
          console.log('attemptsCount: ', attemptsCount);
          if (attemptsCount < 3) {
            alert('Попробуйте угадать снова!');
            toGuess();
          }
        } else if (guessNumber === hiddenNumber) {
          alert('Угадал!!!');
        }
      } else {
        alert('Введи число!');
        toGuess();
      }
    }
  }
  
  toGuess(); //Запускаем функцию угадывания чисел
  console.dir(toGuess);
}

game(); // Запускаем игру

// Генерируем случайное число от min до (max+1)
function randomInteger(min, max) {  
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
