import {NUMBER_OF_CARDS} from '../constants/constants';

export default class NewsCardList {
  constructor(container, createCard, formatterDateSearch) {
    this._container = container;
    this._createCard = createCard;
    this._formatterDataSearch = formatterDateSearch;
    this._start = 0;
    this._end = 3;
    this._lengthArticles = 0;

  }

  _addCard = (cardItem) => {
    const publishedAt = this._formatterDataSearch(cardItem.publishedAt);
    const card = this._createCard(
      cardItem.source,
      cardItem.title,
      cardItem.description,
      cardItem.url,
      cardItem.urlToImage,
      publishedAt
    );
    this._container.append(card);
  };

  toRender = (articles, buttonMore) => {
    this._lengthArticles = articles.length;
    articles.slice(this._start, this._end).forEach((article) => {
      this._addCard(article);
    });

    this._start += NUMBER_OF_CARDS;
    this._end += NUMBER_OF_CARDS;
    if (this._start >= this._lengthArticles) {
      buttonMore.classList.add('hidden');
    }

  };
}
