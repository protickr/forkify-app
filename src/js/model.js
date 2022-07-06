import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  recipe: {},
  search: {
    query: '', 
    results: [], 
    page: 1,
    resultsPerPage: RES_PER_PAGE
  }, 
  bookmarks: [], 
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    if(state.bookmarks.some((bookmark) => bookmark.id === id))
      state.recipe.bookmarked = true;
    else 
      state.recipe.bookmarked = false;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResult = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    const { recipes } = data.data;
  
    if (!recipes) throw new Error(`No recipe matched your search query!`);

    state.search.results = recipes.map((entry)=>{
      return {
        id: entry.id,
        title: entry.title,
        publisher: entry.publisher,
        image: entry.image_url
      }
    });
    state.search.page = 1;
  } catch (err) {
    console.log(`${err} 💥💥💥`);
    throw err;
  }
};

export const getSearchResultsPage = function(page = state.search.page){
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

export const addBookMark = function (recipe) {
  // add bookmark 
  state.bookmarks.push(recipe);

  // if current recipe is book marked 
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};

export const deleteBookmark = function (id) {
  // delete bookmark from bookmarks array 
  const index = state.bookmarks.findIndex((entry) => entry.id === id);
  state.bookmarks.splice(index, 1);

  // mark current recipe as not bookmarked
  if (state.recipe.id === id) state.recipe.bookmarked = false; 
};