import { combineReducers } from "redux";

import words from "./words";
import categories from "./categories";

const rootReducer = combineReducers({ words, categories });
export default rootReducer;
