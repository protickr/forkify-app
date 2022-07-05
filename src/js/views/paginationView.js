import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const gotoPage = +btn.dataset.gotoPage;
      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;

    // page 1 there are other pages
    if (currentPage === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next" data-goto-page="${
          currentPage + 1
        }">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    }

    // last page
    if (currentPage === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto-page="${
          currentPage - 1
        }">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>`;
    }

    // other page
    if (currentPage < numPages) {
      return `
        <button class="btn--inline pagination__btn--prev" data-goto-page="${
          currentPage - 1
        }">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>
        <button class="btn--inline pagination__btn--next" data-goto-page="${
          currentPage + 1
        }">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `;
    }

    // page 1 there are no other pages
    return '';
  }
}

export default new PaginationView();
