export default class NewsCard {
  static _template = document.querySelector('.news-card-template').content;

  constructor(source, title, description, url, urlToImage, publishedAt) {
    this._author = source.name;
    this._title = title;
    this._description = description;
    this._link = url;
    this._image = urlToImage;
    this._date = publishedAt;
  }

  create = () => {
    this._card = NewsCard._template.cloneNode(true);
    this._card.querySelector('.news-card__image').setAttribute('style', `background-image: url(${this._image})`);
    this._card.querySelector('.news-card__title').textContent = this._title;
    this._card.querySelector('.news-card__text').textContent = this._description;
    this._card.querySelector('.news-card__source').textContent = this._author;
    this._card.querySelector('.news-card__date').textContent = this._date;
    this._card.querySelector('.news-card').setAttribute('href', `${this._link}`);
    return this._card;
  };
}
