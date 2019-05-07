/*
    Uses combineReducers Utility To Combine all The Reducers.
*/

import { combineReducers } from "redux";
import postReducer from "./postReducer";
import quoteReducer from "./quoteReducer";
import { items, itemsHaveError, itemsAreLoading } from "./apiReducer";
export default combineReducers({
  items,
  
  itemsHaveError,
  itemsAreLoading,
  quoteReducer
});
