export default class ValidateForm {
  constructor(errorText, errorMessage, button, input) {
    this._errorText = errorText;
    this._errorMessage = errorMessage;
    this._button = button;
    this._input = input;
  }

  isValidate = (input) => {
    this.setButtonActive();
    input.setCustomValidity('');

    if (input.validity.valueMissing) {
      input.setCustomValidity(this._errorMessage);
      this.setButtonDeactive();
    }
    this._errorText.textContent = input.validationMessage;
  };

  setButtonActive = () => {
    this._button.removeAttribute('disabled');
  };

  setButtonDeactive = () => {
    this._button.setAttribute('disabled', 'disabled');
  };

  setInputActive = () => {
    this._input.removeAttribute('disabled');
    this._input.classList.remove('search__input_disable');
  };

  setInputDeactive = () => {
    this._input.setAttribute('disabled', 'disabled');
    this._input.classList.add('search__input_disable');
  };

}
