/* eslint-disable no-param-reassign */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-const */
export default class CardValidator {
  constructor() {
    this.submitBtn = document.querySelector('.input_submit');
  }

  cardCheck() {
    this.submitBtn.addEventListener('click', (event) => {
      event.preventDefault();

      this.cardImgClear();

      let cardNumber = document.querySelector('.input_field').value;

      this.cardValid(cardNumber);
      let cardTypeChosen = this.cardType(cardNumber);
      this.cardImgChose(cardTypeChosen);
    });
  }

  cardValid(cardNumber) {
    let sum = 0;
    const numbers = cardNumber.split('').map(Number);

    for (const [index, num] of numbers.entries()) {
      if (index % 2 === 0) {
        let buffer = num * 2;
        buffer > 9 ? sum += buffer - 9 : sum += buffer;
      } else {
        sum += num;
      }
    }
    return sum % 10 === 0 ? true : false;
  }

  cardType(cardNumber) {
    if (cardNumber.startsWith('4')) { return 'Visa'; }

    if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) { return 'AmericanExpress'; }

    if (cardNumber.startsWith('36')) { return 'DinnersClub'; }

    if (cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55')) { return 'MasterCard'; }

    if (cardNumber.startsWith('6011') || cardNumber.startsWith('644') || cardNumber.startsWith('645') || cardNumber.startsWith('646') || cardNumber.startsWith('647') || cardNumber.startsWith('648') || cardNumber.startsWith('649') || cardNumber.startsWith('65')) { return 'Discover'; }

    if (cardNumber.startsWith('5018') || cardNumber.startsWith('5020') || cardNumber.startsWith('5038') || cardNumber.startsWith('5893') || cardNumber.startsWith('6304') || cardNumber.startsWith('6759') || cardNumber.startsWith('6761') || cardNumber.startsWith('6762') || cardNumber.startsWith('6763')) { return 'Maestro'; }

    if (cardNumber.startsWith('3528') || cardNumber.startsWith('3529') || cardNumber.startsWith('353') || cardNumber.startsWith('354') || cardNumber.startsWith('355') || cardNumber.startsWith('356') || cardNumber.startsWith('357') || cardNumber.startsWith('358')) { return 'JCB'; }

    if (cardNumber.startsWith('2')) { return 'MIR'; }

    return 'Card undefined';
  }

  cardImgChose(cardType) {
    if (cardType === 'Card undefined') {
      this.submitBtn.classList.add('invalid');
      this.submitBtn.style.backgroundColor = 'red';
    } else {
      let cardImg = document.getElementsByClassName(cardType)[0];
      cardImg.style.opacity = 1;
      this.submitBtn.classList.add('valid');
      this.submitBtn.style.backgroundColor = 'green';
    }
  }

  cardImgClear() {
    document.querySelectorAll('.card_img').forEach((el) => {
      el.style.opacity = 0.2;
    });
  }
}
