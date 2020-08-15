export default class DateFormatter {
  constructor() {

  }
  static formatterDateSearch(date) {
    const _newDate = new Date(date);
    const _options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return _newDate.toLocaleString('ru', _options);
  }

  static formatterDateAnalitycs() {

}

}
