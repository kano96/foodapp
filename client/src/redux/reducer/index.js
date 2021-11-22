import { GET_ALL_RECIPES, CHANGE_PAGE } from "../actions";

const initialState = {
  recipes: [],
  house: {},
  page: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
