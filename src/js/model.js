import { async } from 'regenerator-runtime';
import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  recipe: {},
  search: {
    query: '', 
    results: []
  }
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
  } catch (err) {
    console.log(`${err} 💥💥💥`);
    throw err;
  }
};
