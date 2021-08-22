import { combineReducers } from "redux";

import words from "./words";
import categories from "./categories";
import form from "./form";

const rootReducer = combineReducers({ words, categories, form });
export default rootReducer;
