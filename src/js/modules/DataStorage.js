export default class DataStorage {
  setData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  removeData = (key) => {
    localStorage.removeItem(key);
  }
}
