import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import {getUsers} from './api/index'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

{
  //------------------------------------------------------------------
  /* 1-написать функцию которая получает из массива строк новый массив ,
  содержащий длины этих строк
  Пример, 
  'Капуста', 'Репа', 'Редиска', 'Морковка' вернет 7,4,7,8
  */

  const arrText = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
  const wordsLength = (arr) => arr.map((el) => el.length);
  console.log(wordsLength(arrText));

  //------------------------------------------------------------------
  /* 2-написать функцию которая принимает строку (предложение) и 
  возвращает массив первых букв слов данного предложения */

  const text = 'написать       функцию которая принимает строку';

  const textToArr = (text) =>
    text
      .split(' ')
      .filter((el) => el.length > 0)
      .map((el) => el[0]);

  console.log(textToArr(text));

  //------------------------------------------------------------------
  // 3- удалить повторяющиеся символы из строки , оставив только уникальные

  const delDuplicateSymbols = (text) => Array.from(new Set(text)).join('');
  console.log(delDuplicateSymbols(text));

  //------------------------------------------------------------------
  //функцию, которая принимает объект с почтой и паролем
  //и тестирует объект на валидность введенных значений

  const mailPassObj = {
    email: 'someemail@mailPassObj.com',
    passw: 'somePassword1111',
  };
  const validator = (obj) => {
    const MAIL_REGEX = /\S+@\S+\.\S+/;
    const PASSW_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!MAIL_REGEX.test(obj.email)) return false;
    if (!PASSW_REGEX.test(obj.passw)) return false;
    return true;
  };

  console.log('mail passw isValid: ' + validator(mailPassObj));

  //------------------------------------------------------------------
  //5. написать регулярку на модель #rgb (включая #rrggbb)

  const RGB_REGEXP = /^#(rgb$|r{2}g{2}b{2}$)/;
  console.log('rgb_regexp text: ' + RGB_REGEXP.test('#rrggbb'));

  //------------------------------------------------------------------
  //6. Напишите функцию, которая с помощью цикла for...in
  //перебирает свойства объекта obj_2 и удаляет свойства объекта obj_1,
  //имена которых совпадают с именами свойств объекта

  const obj1 = {
    email: 'em',
    password: 'psw',
  };
  const obj2 = {
    email: 'em1',
    password: 'psw1',
    login: 'lg',
    firstName: 'fn',
    lastName: 'ln',
  };
  console.log(obj2);
  const clearObj = (obj1, obj2) => {
    for (let prop in obj2) {
      if (obj1[prop] !== undefined) delete obj2[prop];
    }
  };
  clearObj(obj1, obj2);
  console.log(obj2);
}

const usersArr = getUsers(5)
console.log(usersArr)
