import View from './View.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(entry) {
    return `
    <li class="preview">
        <a class="preview__link" href="#${entry.id}">
        <figure class="preview__fig">
            <img src="${entry.image}" alt="${entry.title}" />
        </figure>
        <div class="preview__data">
            <h4 class="preview__title">${entry.title}</h4>
            <p class="preview__publisher">${entry.publisher}</p>
        </div>
        </a>
    </li>
    `;
  }
}

export default new ResultsView();
