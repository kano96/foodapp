import {
  GET_ALL_RECIPES,
  CHANGE_PAGE,
  GET_ALL_DIET_TYPES,
  FILTRAR,
  SORT_BY_NAME,
  SORT_BY_SCORE,
} from "../actions";

const initialState = {
  allrecipes: [],
  recipes: [],
  diets: [],
  recipe: [],
  page: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        allrecipes: action.payload,
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

    case FILTRAR:
      const all = state.allrecipes;
      const filter =
        action.payload === "All"
          ? all
          : all.filter((r) => {
              if (r.diets.length) {
                for (let diet of r.diets) {
                  if (diet.toLowerCase().includes(action.payload.toLowerCase()))
                    return true;
                }
                return false;
              }
              return false;
            });
      return {
        ...state,
        recipes: filter,
      };

    case SORT_BY_NAME:
      const sortedRecipes =
        action.payload === "asc"
          ? state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
              return 0;
            })
          : state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
              return 0;
            });

      return {
        ...state,
        recipes: sortedRecipes,
      };
    case SORT_BY_SCORE:
      const sortedRecipesByScore =
        action.payload === "asc"
          ? state.recipes.sort((a, b) => a.score - b.score)
          : state.recipes.sort((a, b) => b.score - a.score);
      return {
        ...state,
        recipes: sortedRecipesByScore,
      };
    default:
      return state;
  }
};

export default rootReducer;
