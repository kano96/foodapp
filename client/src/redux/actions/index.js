export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const CREATE_HOUSE = "CREATE_HOUSE";
export const GET_HOUSE = "GET_HOUSE";
export const DELETE_HOUSE = "DELETE_HOUSE";

export const getRecipes = () => async (dispatch) => {
  return fetch("http://localhost:3000/recipes")
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_ALL_RECIPES, payload: json }));
};

export const getHouse = (id) => async (dispatch) => {
  return fetch(`http://localhost:3000/houses/${id}`)
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_HOUSE, payload: { ...json } }));
};

let id = 3;

export const createHouse = (values) => {
  id += 1;
  return {
    type: CREATE_HOUSE,
    payload: {
      ...values,
      id: id,
    },
  };
};
