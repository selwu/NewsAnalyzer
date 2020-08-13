export default class ValidateForm {
  constructor(errorText, errorMessage) {
    this._errorText = errorText;
    this._errorMessage = errorMessage;
  }

  isValidate = (input) => {
    input.setCustomValidity('');

    if (input.validity.valueMissing) {
      input.setCustomValidity(this._errorMessage)
    }

    this._errorText.textContent = input.validationMessage;
  }
}
