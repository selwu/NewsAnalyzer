export default class AnalyticsCalculate {
  constructor(dataLocal) {
    this._dataArr = dataLocal.newsData.articles;
    this._keyWord = dataLocal.keyWord;
  }

  //метод возвращет кол-во упоминаний ключевого слова в заголовках
  calcTitle() {
    return this._dataArr.reduce((sum, item) => {
      const upper = this._keyWord.toUpperCase();
      if (item.title.toUpperCase().includes(upper)) sum += 1;
      return sum;
    }, 0);
  }

  // приватный метод возвращает новый массив с упоминанием ключевого
  // слова в заголовках и текстах статей
  _calcAllMember() {
    return this._dataArr.reduce((totalArr, dataItem) => {
      const titleUpper = dataItem.title.toUpperCase();
      const descriptionUpper = dataItem.description.toUpperCase();
      const keyWordUpper = this._keyWord.toUpperCase();

      if (
        titleUpper.includes(keyWordUpper) ||
        descriptionUpper.includes(keyWordUpper)
      ) {
        totalArr.push(dataItem);
      }
      return totalArr;
    }, []);
  }

  // метод возвращает отсортированный по дням массив
  calcDaysWeek(formatterDateAnalytics) {
    return this._calcAllMember().reduce((objResult, dataItem) => {
      const dateFormatter = formatterDateAnalytics(dataItem.publishedAt);
      if (!objResult[dateFormatter]) {
        objResult[dateFormatter] = 1;
      } else {
        objResult[dateFormatter] += 1;
      }
      return objResult;
    }, {});
  }
}
