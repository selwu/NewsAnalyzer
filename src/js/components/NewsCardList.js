export default class NewsCardList {
  constructor(container, createCard, formatterDateSearch) {
    this._container = container;
    this._createCard = createCard;
    this._formatterDataSearch = formatterDateSearch;
    this._start = 0;
    this._end = 3;
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

    articles.slice(this._start, this._end).forEach((article) => {
      this._addCard(article);
    });

    this._start += 3;
    this._end += 3;
    if (this._start >= 100) {
      buttonMore.classList.add('hidden');
    }

  };
}
