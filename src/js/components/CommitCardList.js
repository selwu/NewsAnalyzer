export default class CommitCardList {

  constructor(container, createCard) {
    this._container = container;
    this._createCard = createCard;
  }

  _addCard = (cardItem) => {
    const name = cardItem.commit.committer.name;
    const email = cardItem.commit.committer.email;
    const date = cardItem.commit.committer.date;
    const message = cardItem.commit.message;
    const avatar = cardItem.author.avatar_url;
    const card = this._createCard([name, email, date, message, avatar]);
    this._container.append(card);
  }

  render = (articles) => {
    articles.slice(0, 20).forEach(article => {
      this._addCard(article);
    })
  }
}
