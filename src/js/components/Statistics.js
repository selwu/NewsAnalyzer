export default class Statistics {

  static _templateAnalytics = document.querySelector('.template-analytics').content;
  static _templateDate = document.querySelector('.template-date').content;
  static _templateCell = document.querySelector('.template-cell').content;

  constructor(data, container) {
    this._container = container;
    this._localData = data.newsData;
    this._localInput = data.keyWord;
  }

  render(totalTitleCount, totalSortArr) {
    const date = new Date();
    this._analyticsContainer = Statistics._templateAnalytics.cloneNode(true);
    this._analyticsContainer.querySelector('#statistics-input').textContent = this._localInput;
    this._analyticsContainer.querySelector('#statistics-all').textContent =this._localData.totalResults;
    this._analyticsContainer.querySelector('#statistics-title').textContent = totalTitleCount;
    this._analyticsContainer.querySelector('#table-month').textContent = date.toLocaleString('ru', {month: 'long'});


    Object.keys(totalSortArr).sort().forEach((item) => {
      console.log(item);
      this._cell = Statistics._templateCell.cloneNode(true);
      this._date = Statistics._templateDate.cloneNode(true);
      this._cell.querySelector('.table__cell').textContent = totalSortArr[item];
      this._cell.querySelector('.table__cell').setAttribute('style', `width: ${totalSortArr[item]}%`);
      this._date.querySelector('.table__days-item').textContent = item;
      this._analyticsContainer.querySelector('.table__container').append(this._cell);
      this._analyticsContainer.querySelector('.table__days').append(this._date);
    })
    this._container.append(this._analyticsContainer);
  }

}
