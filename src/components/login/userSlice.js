import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../data/shared/baseUrl";

export const userLogin = createAsyncThunk(
    'user/login',
    async (details, { dispatch }) => {
        const response = await fetch(baseUrl + 'users/signin', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json();
        dispatch(setCurrentUser(data));
        return data;
    }
)

export const userSignup = createAsyncThunk(
    'user/signup',
    async (details, { dispatch }) => {
        const response = await fetch(baseUrl + 'users/signup', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json();
        dispatch(setCurrentUser(data));
        return data;
    }
);

export const userLogout = createAsyncThunk(
    'user/logout',
    async (user, { dispatch }) => {
        const bearer = 'Bearer ' + localStorage.getItem('token');
        const response = await fetch(baseUrl + 'users/logout', {
            headers: {
                Authorization: bearer,
                'Content-Type': 'application/json'
            },
            // credentials: 'same-origin'
        });
        // Remove the token on client side no matter what happens with the fetch
        localStorage.removeItem('token');
        if (!response.ok) {
            return Promise.reject(
                'There was a problem with logging out on the server side, status: ' +
                response.status
            );
        }
        const data = await response.json();
        dispatch(clearCurrentUser());
        return data;
    });

export const validateLogin = createAsyncThunk(
    'user/validateLogin',
    async (values, { dispatch }) => {
        const bearer = 'Bearer ' + localStorage.getItem('token');
        if(!localStorage.getItem('token')) {
            return;
        }
        const response = await fetch(baseUrl + 'users/checkJWTtoken', {
            headers: {
                Authorization: bearer,
                'Content-Type': 'application/json'
            },
            // credentials: 'same-origin'
        });
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        if (!data.success) {
            localStorage.removeItem('token');
            dispatch(clearCurrentUser());
        } else {
            dispatch(setCurrentUser());
        }
        return data;
    }
);

const initialState = {
    currentUser: null,
    userLoading: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload.user
        },
        clearCurrentUser: (state, action) => {
            state.currentUser = null
        }
    },
    extraReducers: {
        [userLogin.pending]:(state)=> {
            state.userLoading = true;
            localStorage.removeItem('token');
        },
        [userLogin.rejected]: (state, action)=> {
            state.userLoading = false;
            localStorage.removeItem('token');
            alert('Login failed.', action.error.message);
        },
        [userLogin.fulfilled]:(state, action)=> {
            state.userLoading = false;
            localStorage.setItem('token', action.payload.token);
            console.log('You are successfully logged in!')
        },
        [userSignup.pending]:(state)=> {
            state.userLoading = true;
            localStorage.removeItem('token');
        },
        [userSignup.rejected]: (state, action)=> {
            state.userLoading = false;
            localStorage.removeItem('token');
            alert('Signup failed.', action.error.message);
        },
        [userSignup.fulfilled]:(state, action)=> {
            state.userLoading = false;
            localStorage.setItem('token', action.payload.token);
            console.log('You are successfully signed up and logged in!')
        },        
        [userLogout.fulfilled]: (state) => {
            state.userLoading = false;
        },
        [userLogout.rejected]: (state) => {
            state.userLoading = false;
        }
        // ,
        // [validateLogin.fulfilled]: (state, action)=>{
        //     if(action.payload.success) {
        //         state.currentUser = action.payload.user
        //     }            
        // }
    }
})

export const userReducer = userSlice.reducer;

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;