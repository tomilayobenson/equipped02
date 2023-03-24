import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser  : null
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {},
    extraReducers:{}
})