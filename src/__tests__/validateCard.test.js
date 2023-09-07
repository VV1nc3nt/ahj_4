/* eslint-disable no-param-reassign */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
/* eslint-disable import/named */
/* eslint-disable no-useless-concat */
import CardValidator from '../js/validateCard';

test('test to invalid number', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>';

  let cardValidator = new CardValidator();
  let result = cardValidator.cardValid('1241404227148253');
  
  expect(result).toBe(false);
});

test('test to valid number', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>';

  let cardValidator = new CardValidator();
  let result = cardValidator.cardValid('3543472211916373');
  
  expect(result).toBe(true);
});

test('test card type - visa', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>';

  let cardValidator = new CardValidator();
  let result = cardValidator.cardType('4929352541951609');
  
  expect(result).toBe('Visa');
});

test('test card type - Maestro', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>';

  let cardValidator = new CardValidator();
  let result = cardValidator.cardType('5893870009707261');
  
  expect(result).toBe('Maestro');
});

test('test card type - MasterCard', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>';

  let cardValidator = new CardValidator();
  let result = cardValidator.cardType('5241404227148253');
  
  expect(result).toBe('MasterCard');
});

test('test card type - Discover', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>';

  let cardValidator = new CardValidator();
  let result = cardValidator.cardType('6011150143678420');
  
  expect(result).toBe('Discover');
});

test('test card type - American Express', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>';

  let cardValidator = new CardValidator();
  let result = cardValidator.cardType('348040502387548');
  
  expect(result).toBe('AmericanExpress');
});

test('test card type - MIR', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>';

  let cardValidator = new CardValidator();
  let result = cardValidator.cardType('2200770212727079');
  
  expect(result).toBe('MIR');
});

test('test card type - Dinners Club', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>';

  let cardValidator = new CardValidator();
  let result = cardValidator.cardType('36572919209391');
  
  expect(result).toBe('DinnersClub');
});

test('test card type - JCB', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>';

  let cardValidator = new CardValidator();
  let result = cardValidator.cardType('3589934582830371');
  
  expect(result).toBe('JCB');
});

test('test undefined card', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>';

  let cardValidator = new CardValidator();
  let result = cardValidator.cardType('3');

  expect(result).toBe('Card undefined');
});

test('test cardImgClear func', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>' + '<div class="card_icons">' + '<img src="./assets/img/ae.jpeg" alt="" class="card_img AmericanExpress">' + '<img src="./assets/img/dc.jpeg" alt="" class="card_img DinnersClub">' + '<img src="./assets/img/discover.jpeg" alt="" class="card_img Discover">' + '<img src="./assets/img/jcb.jpeg" alt="" class="card_img JCB">' + '<img src="./assets/img/maestro.jpeg" alt="" class="card_img Maestro">' + '<img src="./assets/img/mc.jpeg" alt="" class="card_img MasterCard">' + '<img src="./assets/img/mir.png" alt="" class="card_img MIR">' + '<img src="./assets/img/visa.jpeg" alt="" class="card_img Visa">' + '</div>';

  let cardValidator = new CardValidator();

  document.querySelectorAll('.card_img').forEach((el) => {
    el.style.opacity = 1;
  });
  cardValidator.cardImgClear();

  let element = document.querySelector('.card_img');
  let result = window.getComputedStyle(element).getPropertyValue('opacity'); 

  expect(result).toBe('0.2');
});

test('testing card img chose if card is valid', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>' + '<div class="card_icons">' + '<img src="./assets/img/ae.jpeg" alt="" class="card_img AmericanExpress">' + '<img src="./assets/img/dc.jpeg" alt="" class="card_img DinnersClub">' + '<img src="./assets/img/discover.jpeg" alt="" class="card_img Discover">' + '<img src="./assets/img/jcb.jpeg" alt="" class="card_img JCB">' + '<img src="./assets/img/maestro.jpeg" alt="" class="card_img Maestro">' + '<img src="./assets/img/mc.jpeg" alt="" class="card_img MasterCard">' + '<img src="./assets/img/mir.png" alt="" class="card_img MIR">' + '<img src="./assets/img/visa.jpeg" alt="" class="card_img Visa">' + '</div>';

  let cardValidator = new CardValidator();
  cardValidator.cardImgChose(cardValidator.cardType('3589934582830371'));

  let chosenElement = document.querySelector('.JCB');
  let result = window.getComputedStyle(chosenElement).getPropertyValue('opacity'); 

  expect(result).toBe('1');
});

test('testing card img chose if card is invalid', () => {
  document.body.innerHTML = '<form action="" class="form">' + '<input type="text" class="input_field">' + '<input type="submit" value="Проверить" class="input_submit">' + '</form>' + '<div class="card_icons">' + '<img src="./assets/img/ae.jpeg" alt="" class="card_img AmericanExpress">' + '<img src="./assets/img/dc.jpeg" alt="" class="card_img DinnersClub">' + '<img src="./assets/img/discover.jpeg" alt="" class="card_img Discover">' + '<img src="./assets/img/jcb.jpeg" alt="" class="card_img JCB">' + '<img src="./assets/img/maestro.jpeg" alt="" class="card_img Maestro">' + '<img src="./assets/img/mc.jpeg" alt="" class="card_img MasterCard">' + '<img src="./assets/img/mir.png" alt="" class="card_img MIR">' + '<img src="./assets/img/visa.jpeg" alt="" class="card_img Visa">' + '</div>';

  let cardValidator = new CardValidator();
  cardValidator.cardImgChose(cardValidator.cardType('3'));

  let result = document.contains(document.querySelector('.invalid')); 

  expect(result).toBe(true);
});
