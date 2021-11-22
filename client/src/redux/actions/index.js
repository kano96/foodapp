export const GET_ALL_HOUSES = "GET_ALL_HOUSES";
export const CREATE_HOUSE = "CREATE_HOUSE";
export const GET_HOUSE = "GET_HOUSE";
export const DELETE_HOUSE = "DELETE_HOUSE";

export const getAllHouses = () => (dispatch) => {
  return fetch("http://localhost:3000/houses")
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_ALL_HOUSES, payload: json }));
};

export const getHouse = (id) => (dispatch) => {
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

export const deleteHouse = (arg) => {
  return {
    type: DELETE_HOUSE,
    payload: arg,
  };
};
