import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../data/shared/baseUrl";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response= await fetch(baseUrl + 'products');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = response.json();
        return data;
    }
)

export const postProduct = createAsyncThunk(
    'products/postProduct',
    async (product, {dispatch}) => {
        const response = await fetch(baseUrl + 'products',{method:'POST', body:JSON.stringify(product), headers:{'content-Type':'application/json'}})
        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json()
        dispatch(addProduct(data));
    }
)
const initialState = {
    productsArray:[],
    isLoading:true,
    errMsg:''
}

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        addProduct: (state,action) => {
            const newProduct = {
                id: state.productsArray.length,
                ...action.payload
            }
            state.productsArray.push(newProduct);
        }
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.isLoading =true;
        },
        [fetchProducts.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.productsArray = action.payload;
            state.errMsg = ''
        },
        [fetchProducts.rejected]: (state,action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [postProduct.rejected]: (state,action) => {
            alert (
                'Your product could not be posted\nError: ' +
                (action.error ? action.error.message: 'Fetch failed')
            )
        }
    }
})

export const productsReducer = productsSlice.reducer;
export const {addProduct} = productsSlice.actions;

export const selectAllProducts = (state) => {
    return state.products.productsArray;
};