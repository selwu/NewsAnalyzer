export default class Statistics {

  static _templateDate = document.querySelector('.template-date').content;
  static _templateCell = document.querySelector('.template-cell').content;

  constructor(data, containerDays, containerNumbers, containerMain) {
    this._containerDays = containerDays;
    this._containerNumbers = containerNumbers;
    this._containerMain = containerMain;
    this._localData = data.newsData;
    this._localInput = data.keyWord;
  }

  render(totalTitleCount, totalSortArr) {
    const date = new Date();
    this._containerMain.querySelector('#statistics-input').textContent = this._localInput;
    this._containerMain.querySelector('#statistics-all').textContent =this._localData.totalResults;
    this._containerMain.querySelector('#statistics-title').textContent = totalTitleCount(this._localData, this._localInput);
    this._containerMain.querySelector('#table-month').textContent = date.toLocaleString('ru', {month: 'long'});


    Object.keys(totalSortArr).sort().forEach((item) => {
      this._cell = Statistics._templateCell.cloneNode(true);
      this._date = Statistics._templateDate.cloneNode(true);
      this._cell.querySelector('.table__cell').textContent = totalSortArr[item];
      this._cell.querySelector('.table__cell').setAttribute('style', `width: ${totalSortArr[item]}%`);
      this._date.querySelector('.table__days-item').textContent = item;
      this._containerNumbers.append(this._cell);
      this._containerDays.append(this._date);
    })
  }

}
