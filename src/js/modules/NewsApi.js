export default class NewsApi {
  constructor(option) {
    this._url = option.baseUrl;
    this._key = option.key;
  }

  getNews = (keyWord) => {
    this._date = new Date();
    this._date.setDate(this._date.getDate() - 7);
    this._date = this._date.toISOString();

    return fetch(`${this._url}/v2/everything?language=ru&sortBy=publishedAt&pageSize=100&from=${this._date}&q=${'Владимир Путин'}&apiKey=${this._key}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`error ${res.status}`);
      })
  }
}
