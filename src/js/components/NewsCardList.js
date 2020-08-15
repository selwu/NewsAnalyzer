export default class NewsCardList {

  constructor(container, createCard, formatterDateSearch) {
    this._container = container;
    this._createCard = createCard;
    this._formatterDataSearch = formatterDateSearch;
  }

  _addCard = (cardItem) => {
    const publishedAt = this._formatterDataSearch(cardItem.publishedAt);
    const card = this._createCard(cardItem.source, cardItem.title, cardItem.description, cardItem.url, cardItem.urlToImage, publishedAt);
    this._container.append(card);
  }

  toRender = (articles) => {
    articles.forEach(article => {
      this._addCard(article);
    })
  }
}
