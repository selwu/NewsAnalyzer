export default class DataStorage {
  constructor() {
  }

  setData = (key, data) => {
    localStorage.setItem(key.toString(), JSON.stringify(data));
  }

  getData = (key) => {
    return JSON.parse(localStorage.getItem(key.toString()));
  }
}
