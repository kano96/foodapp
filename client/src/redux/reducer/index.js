import {
  GET_ALL_RECIPES,
  CHANGE_PAGE,
  ADD_FILTER,
  REMOVE_FILTER,
  GET_ALL_DIET_TYPES,
  FILTRAR,
} from "../actions";

const initialState = {
  recipes: [],
  diets: [],
  recipe: [],
  filtros: [],
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
    case GET_ALL_DIET_TYPES:
      return {
        ...state,
        diets: action.payload,
      };

    case ADD_FILTER:
      return {
        ...state,
        filtros: [...state.filtros, action.payload],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filtros: state.filtros.filter((f) => f !== action.payload),
      };
    // case FILTRAR:
    //   return {
    //     ...state,
    //     recipes: state.recipes.filter((r) => {
    //       if (
    //         r.diets.forEach((d) =>
    //           d
    //             .toLowerCase()
    //             .includes(state.filtros.forEach((f) => f.toLowerCase()))
    //         )
    //       ) {
    //         return r;
    //       }
    //     }),
    // };
    default:
      return state;
  }
};

export default rootReducer;
