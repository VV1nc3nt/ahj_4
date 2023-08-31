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
