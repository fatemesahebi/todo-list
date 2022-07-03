import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: [],
        pageMode: "list",
        counter: 0,
        selectedItem: [],

    },
    reducers: {
        addTolist: (state, action) => {
            state.todo = [...state.todo, action.payload]
        },
        setPageMode: (state, action) => {
            state.pageMode = action.payload
        },
        addCounter: (state, action) => {
            state.counter++
        },
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload
        },
        setDone: (state, action) => {
            state.todo = state.todo.map(item => (item.id === action.payload.id) ? {...item, active: false} : item)
        },
        deleteItem: (state, action) => {
            state.todo = state.todo.filter(item => (item.id !== action.payload.id))
        },
        editList: (state, action) => {
            state.todo = state.todo.map(item => (item.id === action.payload.id) ? {...action.payload} : item)
        },

    },
});
export const {addTolist, setPageMode, addCounter, setSelectedItem, setDone, deleteItem, editList} = todoSlice.actions;

export default todoSlice.reducer;