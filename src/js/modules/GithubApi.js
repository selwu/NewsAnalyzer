export default class GithubApi {
  constructor(config) {
    this._config = config;
  }

  getCommits = () => {
    return fetch(`${this._config}`).then((res) => {
      if (res.ok === true) {
        return res.json();
      }
      return Promise.reject(`error ${res.status}`);
    });
  };
}
