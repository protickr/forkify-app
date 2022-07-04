import * as model from './model.js';
import recipeView from './views/recipeView.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    let id = window.location.hash.slice(1);
    if (!id) return;

    // 
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);
    
    // 2) rendering recipe
    recipeView.render(model.state.recipe);
    
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    recipeView.renderErrorMessage();
  }
};

const init = function (){
  recipeView.addHandlerRender(controlRecipes);
};

init();
