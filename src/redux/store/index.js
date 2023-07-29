import { createStore, combineReducers } from 'redux';
import { expenseReducers } from "../reducers/expenses.js";

const reducers = combineReducers({
    expenses: expenseReducers
})
const initialState = {}
export const store = createStore(reducers, initialState)
