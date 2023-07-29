import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action_types/expenses.js"

const intialList = () => {
    const list = localStorage.getItem("expense-list")
    let expenses = []
    if (list) {
        expenses = JSON.parse(list)
    }
    return expenses;
}
const intialState = {
    expenseList: intialList(),
    query: ""
}

export const expenseReducers = (state = intialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            localStorage.setItem("expense-list", JSON.stringify([...state.expenseList, action.data]))
            return {
                ...state,
                expenseList: [...state.expenseList, action.data]
            }
        case DELETE_EXPENSE: {
            const { data } = action;
            const updatedList = state.expenseList.filter((item) => item.createdAt !== data.createdAt);
            localStorage.setItem("expense-list", JSON.stringify(updatedList))
            return {
                ...state,
                expenseList: updatedList
            }
        }
        case SEARCH_EXPENSE: {
            const { query } = action;
            return {
                ...state,
                query: query
            }
        }
        default:
            return state
    }
}
