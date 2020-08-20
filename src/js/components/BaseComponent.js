export default class BaseComponent {
  constructor(handlers = []) {
    this._handlers = handlers;
  }

  setHandlers() {
    this._handlers.forEach((handler) => {
      this._addHandler(handler);
    });
  }

  _addHandler({ callback, event, element }) {
    element.addEventListener(event, callback);
  }
}
