import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../data/data";



const categoriesSlice = createSlice({
    name:"categories",
    initialState:{
        categories:CATEGORIES,
        selectedCategory:null
    },reducers:{
        setCategories:(state,action)=> {
            state.meals=action.payload
        },
        setSelectedCategory:(state,action)=> {
            state.selectedCategory=action.payload
        }
    }
})
export const {setCategories,setSelectedCategory} = categoriesSlice.actions
export default categoriesSlice.reducer