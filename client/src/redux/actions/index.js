export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const GET_ALL_DIET_TYPES = "GET_ALL_DIET_TYPES";
export const FILTRAR = "FILTRAR";
export const SORT_BY_NAME = "SORT_BY_NAME";

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

export const filtrar = (diet) => {
  return {
    type: FILTRAR,
    payload: diet,
  };
};

export const sortByName = (orderedRecipes) => {
  return {
    type: SORT_BY_NAME,
    payload: orderedRecipes,
  };
};
