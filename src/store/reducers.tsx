import { combineReducers } from "redux";
import { TOOGLE_THEME } from "./action";

const initialState = {
  theme: 'white'
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
      default:
        return state;
  }
}


const rootReducer = combineReducers({
  theme: themeReducer,
})

export default rootReducer
