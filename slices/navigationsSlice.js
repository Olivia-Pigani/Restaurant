// // asyncStorage pour garder en mémoire la navigation de l'utilisateur 
// // ligne de commande pour le async storage : npm install @react-native-async-storage/async-storage 

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import AsyncStorage from "@react-native-async-storage/async-storage";


// export const saveActualScreen = createAsyncThunk({
//     "meals/saveActualScreen",
//     async () =>{
//         try{
//            const navigationState = await AsyncStorage.setItem('navigationState')
//             return navigationState ? JSON.parse(navigationState) : null
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
// })

// const navigationsSlice = createSlice({
//     name:"navigation",
//     initialState:{
//         actualScreen:null,
//     },extraReducers:(builder)=>{
//         builder.addCase(saveActualScreen.fulfilled, (state,action)=>{

//         })
//     }

// })