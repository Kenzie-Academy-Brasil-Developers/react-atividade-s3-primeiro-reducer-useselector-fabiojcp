import { configureStore, combineReducers } from "@reduxjs/toolkit";


// importando o reducer
import fruitsReducer from "./Modules/Reducer";

// combinando os reducers da aplicação, nesse exemplo temos apenas um
const reducer = combineReducers({ fruits: fruitsReducer });

// passando os reducers combinados para a store
const store = configureStore({reducer});

export default store;