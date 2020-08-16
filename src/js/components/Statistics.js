export default class Statistics {

  static _templateAnalytics = document.querySelector('.template-analytics').content;
  // static _templateDate = document.querySelector('.template-date').content;
  // static _templateCell = document.querySelector('.template-cell').content;

  constructor(data, container) {
    this._container = container;
    this._localData = data.newsData;
    this._localInput = data.keyWord;
  }

  render() {
    this._analyticsContainer = Statistics._templateAnalytics.cloneNode(true);
    // this._cell = Statistics._templateCell.cloneNode(true);
    // this._date = Statistics._templateDate.cloneNode(true);
    this._analyticsContainer.querySelector('#statistics-input').textContent = this._localInput;
    this._analyticsContainer.querySelector('#statistics-all').textContent =this._localData.totalResults;



    // this._analyticsContainer.querySelector('.table__days').append(this._date);
    // this._analyticsContainer.querySelector('.table__container').append(this._cell);
    this._container.append(this._analyticsContainer);
  }

}
