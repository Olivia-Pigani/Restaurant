import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from "./slices/categoriesSlice.js";
import mealsSlice from "./slices/mealsSlice.js";

export default configureStore({
  reducer:{
    meals:mealsSlice,
    categories:categoriesSlice
  }
})