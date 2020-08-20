export  default class NewsCard {
  static _template = document.querySelector('.story-card-template').content

  constructor([name, email, date, message, avatar]) {
    this._name = name;
    this._email = email;
    this._date = date;
    this._message = message;
    this._avatar = avatar;
  }

  create = () => {
    this._card = NewsCard._template.cloneNode(true);
    this._card.querySelector('.story-card__image').setAttribute('src', `${this._avatar}`);
    this._card.querySelector('.story-card__text').textContent = this._message;
    this._card.querySelector('.story-card__author').textContent = this._name;
    this._card.querySelector('.story-card__mail').textContent = this._email;
    this._card.querySelector('.story-card__date').textContent = this._date;
    return this._card;
  }
}
