/** ligne de commande pour redux : npm install redux @reduxjs/toolkit 
*/
import { createSlice } from "@reduxjs/toolkit";
import {MEALS} from "../data/data.js"



const mealsSlice = createSlice({
    name:"meals",
    initialState:{
        meals:MEALS,
        selectedMeal:null
    },reducers:{
        setMeals:(state,action)=> {
             state.meals=action.payload
         },
        setSelectedMeal:(state,action)=> {
            state.selectedMeal=action.payload
        }
    }
})
export const {setMeals,setSelectedMeal} = mealsSlice.actions
export default mealsSlice.reducer