export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const GET_TOTAL_PAGES = "GET_TOTAL_PAGES";

export const getRecipes = () => async (dispatch) => {
  return fetch("http://localhost:3001/recipes")
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_ALL_RECIPES, payload: json }));
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
