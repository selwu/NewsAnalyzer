export default class AnalyticsCalculate {
  //метод возвращет кол-во упоминаний ключевого слова в заголовках
  static calculateTitle(dataLocal, keyWord) {
    return dataLocal.articles.reduce((sum, item) => {
      const upper = keyWord.toUpperCase();
      if (item.title.toUpperCase().includes(upper)) sum += 1;
      return sum;
    }, 0);
  }

  // приватный метод возвращает новый массив с упоминанием ключевого
  // слова в заголовках и текстах статей
  static calculateAllMember(dataLocal, keyWord) {
    return dataLocal.articles.reduce((totalArr, dataItem) => {
      const titleUpper = dataItem.title.toUpperCase();
      const descriptionUpper = dataItem.description.toUpperCase();
      const keyWordUpper = keyWord.toUpperCase();

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
  static calculateDaysWeek(formatterDateAnalytics, calcAllMember) {
    return calcAllMember.reduce((objResult, dataItem) => {
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
