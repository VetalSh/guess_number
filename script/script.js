'use strict';

// Проверка на число
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


function game() {
  let attempts = 10; // Счетчик попыток

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
        --attempts; // Уменьшаем количество попыток
        if (guessNumber > hiddenNumber) {
          alert('Загаданное число меньше, осталось попыток ' + attempts);
          if (attempts > 0) {
            alert('Попробуйте угадать снова!');
            toGuess();
          } else {
            let continueQuestion = confirm('Попытки закончились, хотите сыграть еще?');
            if (continueQuestion) {
              game(); // Запускаем игру снова
            } else {
              alert('Игра завершена! Захочешь сыграть еще - приходи!!!');
            }
          }
        } else if (guessNumber < hiddenNumber) {
          alert('Загаданное число больше, осталось попыток ' + attempts);          
          if (attempts > 0) {
            alert('Попробуйте угадать снова!');
            toGuess();
          } else {
            let continueQuestion = confirm('Попытки закончились, хотите сыграть еще?');
            if (continueQuestion) {
              game(); // Запускаем игру снова
            } else {
              alert('Игра завершена! Захочешь сыграть еще - приходи!!!');
            }
          }
        } else if (guessNumber === hiddenNumber) {
          let winQuestion = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
          if (winQuestion) {
            game(); // Запускаем игру снова
          } else {
            alert('Игра завершена! Захочешь сыграть еще - приходи!!!');
          }
        }
      } else {
        alert('Введи число!');
        toGuess();
      }
    }
  }
  
  toGuess(); //Запускаем функцию угадывания чисел
}

game(); // Запускаем игру

// Генерируем случайное число от min до (max+1)
function randomInteger(min, max) {  
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}