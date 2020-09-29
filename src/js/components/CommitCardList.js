export default class CommitCardList {
  constructor(container, createCard, dateFormatter) {
    this._container = container;
    this._createCard = createCard;
    this._dateFormatter = dateFormatter;
  }

  _addCard = (cardItem) => {
    const name = cardItem.commit.committer.name;
    const email = cardItem.commit.committer.email;
    const date = this._dateFormatter(cardItem.commit.committer.date);
    const message = cardItem.commit.message;
    const card = this._createCard([name, email, date, message]);
    this._container.append(card);
  };

  render = (articles) => {
    articles.slice(0, 20).forEach((article) => {
      this._addCard(article);
    });
  };
}
