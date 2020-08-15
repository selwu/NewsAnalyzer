export default class DataStorage {
  setData = (key, data) => {
    localStorage.setItem(key.toString(), JSON.stringify(data));
  };

  getData = (key) => {
    return JSON.parse(localStorage.getItem(key.toString()));
  };

  removeData = (key) => {
    localStorage.removeItem(key);
  }
}
