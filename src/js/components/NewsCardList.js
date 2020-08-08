export default class NewsCardList {

  constructor(container, createCard) {
    this._container = container;
    this._createCard = createCard;
  }

  _addCard = (cardItem) => {
    const card = this._createCard([cardItem.source, cardItem.title, cardItem.description, cardItem.url, cardItem.urlToImage, cardItem.publishedAt]);
    this._container.append(card);
  }

  toRender = (articles) => {
    articles.forEach(article => {
      this._addCard(article);
    })
  }
}
