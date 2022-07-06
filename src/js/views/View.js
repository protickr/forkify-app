import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  /**
   * 
   * @param {Object | Object[]} data The data to be rendered (e.g., a recipe)
   * @param {boolean} [render=true] If false then return the markup string instead of redering it to DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Protick Roy
   * @todo Finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderErrorMessage();

    this._data = data;
    const markup = this._generateMarkup();

    if(!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    // create virtual DOM from markup string
    const newDOM = document.createRange().createContextualFragment(newMarkup);

    // select all elements from DOM which returns a node list and to new array
    const newElements = Array.from(newDOM.querySelectorAll('*'));

    // current element node list
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements.at(i);

      // updates changed text
      if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== ''){
        curEl.textContent = newEl.textContent;
      }

      // updates changed attributes
      if(!newEl.isEqualNode(curEl)){
        Array.from(newEl.attributes).forEach((attr)=>{
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  renderSpinner() {
    const markup = `
            <div class="spinner">
              <svg>
                <use href="${icons}/icons.svg#icon-loader"></use>
              </svg>
            </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderErrorMessage(message = this._errorMessage) {
    const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSuccessMessage(message = this._successMessage) {
    const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
