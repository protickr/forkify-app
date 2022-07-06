import * as model from './model.js';
import bookmarksView from './views/bookmarksView.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import searchView from './views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    let id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    // -1) mark bookmark as active if it is the current recipe in the recipeView
    bookmarksView.update(model.state.bookmarks);

    // 0) mark selected result as active before rendering the recipe
    resultsView.update(model.getSearchResultsPage());

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    recipeView.renderErrorMessage();
  }
};

const controlSearchResults = async function () {
  try {
    // 1) get search query from view
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner();

    // 2) load search results from model
    await model.loadSearchResult(query);

    // 3) render search results by view
    resultsView.render(model.getSearchResultsPage());

    // 4) render intial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.error(`${error} 💥💥💥`);
    resultsView.renderErrorMessage();
  }
};

const controlPagination = function (gotoPage) {
  // 3) render search results by view
  resultsView.render(model.getSearchResultsPage(gotoPage));

  // 4) render intial pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings){
  // update serving in the state
  model.updateServings(newServings);

  // re-render recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // add or delete bookmark
  !model.state.recipe.bookmarked
    ? model.addBookMark(model.state.recipe)
    : model.deleteBookmark(model.state.recipe.id);

  // update recipe view
  recipeView.update(model.state.recipe);

  // render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHanlderUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
