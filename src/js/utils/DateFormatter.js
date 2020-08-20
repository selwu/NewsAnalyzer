export default class DateFormatter {
  constructor() {

  }
  static formatterDateLocal(date) {
    const _newDate = new Date(date);
    const _options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return _newDate.toLocaleString('ru', _options);
  }

  static formatterDateAnalytics(date) {
    const days = {
      0: 'вс',
      1: 'пн',
      2: 'вт',
      3: 'ср',
      4: 'чт',
      5: 'пт',
      6: 'сб',
    };
    const _newDate = new Date(date);
    const day = _newDate.getDay();
    const number = _newDate.getDate();

    return `${number}, ${days[day]}`;
}

}
