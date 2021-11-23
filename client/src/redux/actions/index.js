export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const GET_ALL_DIET_TYPES = "GET_ALL_DIET_TYPES";
export const FILTRAR = "FILTRAR";

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

// export const getHouse = (id) => async (dispatch) => {
//   return fetch(`http://localhost:3000/houses/${id}`)
//     .then((response) => response.json())
//     .then((json) => dispatch({ type: GET_HOUSE, payload: { ...json } }));
// };
export const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    payload: page,
  };
};

export const addFilter = (id) => {
  return {
    type: ADD_FILTER,
    payload: id,
  };
};
export const removeFilter = (id) => {
  return {
    type: REMOVE_FILTER,
    payload: id,
  };
};

export const filtrar = () => {
  return {
    type: FILTRAR,
  };
};
