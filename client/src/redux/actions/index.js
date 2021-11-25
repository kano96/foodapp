export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const GET_ALL_DIET_TYPES = "GET_ALL_DIET_TYPES";
export const FILTRAR = "FILTRAR";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_SCORE = "SORT_BY_SCORE";
export const GET_RECIPE = "GET_RECIPE";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const SET_ALL_RECIPES = "SET_ALL_RECIPES";

export const getRecipes = () => async (dispatch) => {
  return fetch("http://localhost:3001/recipes")
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_ALL_RECIPES, payload: json }));
};
export const getDietTypes = () => async (dispatch) => {
  return fetch("http://localhost:3001/types")
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_ALL_DIET_TYPES, payload: json }));
};

export const getRecipe = (name) => async (dispatch) => {
  return fetch(`http://localhost:3001/recipes?name=${name}`)
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_RECIPE, payload: json }))
    .catch((r) => console.log(r));
};

export const getRecipeById = (id) => async (dispatch) => {
  return fetch(`http://localhost:3001/recipes/${id}`)
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_RECIPE_BY_ID, payload: json }));
};

export const setAllRecipes = () => {
  return {
    type: SET_ALL_RECIPES,
  };
};

export const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    payload: page,
  };
};

export const filtrar = (diet) => {
  return {
    type: FILTRAR,
    payload: diet,
  };
};

export const sortByName = (type) => {
  return {
    type: SORT_BY_NAME,
    payload: type,
  };
};
export const sortByScore = (type) => {
  return {
    type: SORT_BY_SCORE,
    payload: type,
  };
};
