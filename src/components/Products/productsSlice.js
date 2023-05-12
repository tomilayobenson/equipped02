import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../data/shared/baseUrl";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch(baseUrl + 'products');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = response.json();
        return data;
    }
)

export const postProduct = createAsyncThunk(
    'products/postProduct',
    async (product, { dispatch }) => {        
        var formdata = new FormData();
        formdata.append("title", product.postingTitle)
        product.selectCategories.forEach((category, idx) => {
            formdata.append("category", category.attributes.value.nodeValue)
        });
        // if(product.selectCategory !== "Select an Option") {
        //     formdata.append("category", product.selectCategory)
        // } //for single select field
        formdata.append("description", product.desc)
        formdata.append("address", product.inputAddress)
        formdata.append("address2", product.inputAddress2)
        formdata.append("city", product.inputCity)
        formdata.append("state", product.inputState)
        formdata.append("zip", product.inputZip)
        if (product.pricingSwitches.includes("For Rent")) {
            formdata.append("forRent", true)
        }
        if (product.pricingSwitches.includes("For Buy")) {
            formdata.append("forPurchase", true)
        }
        formdata.append("day", product.enterDay)
        formdata.append("week", product.enterWeek)
        formdata.append("month", product.enterMonth)
        formdata.append("rentQuantity", product.enterQuantity)
        formdata.append("value", product.enterValue)
        formdata.append("minRentDays", product.enterMin)
        formdata.append("price", product.itemPrice)
        formdata.append("purchaseQuantity", product.itemQuantity)
        product.productPhotos.forEach((photo, idx) => {
            formdata.append("productPhotos", photo)
        });
        console.log(formdata)
        var myHeaders = new Headers();
        const bearer = 'Bearer ' + localStorage.getItem('token');
        myHeaders.append("Authorization",bearer)
        var requestOptions = {
            method: 'POST',
            body: formdata,
            headers: myHeaders  
          };
        const response = await fetch(baseUrl + 'products', requestOptions)
        if (!response.ok) {
            return Promise.reject(response.status);
        }
        const data = await response.json()
        dispatch(addProduct(data));
    }
)

export const fetchCategories = createAsyncThunk(
    'products/fetchCategories',
    async () => {
        const response = await fetch(baseUrl + 'categories');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = response.json();
        return data;
    }
)
const initialState = {
    productsArray: [],
    isLoading: true,
    errMsg: '',
    categoriesArray:[],
    categoriesLoading: true,
    catErrMsg:''
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                id: state.productsArray.length,
                ...action.payload
            }
            state.productsArray.push(newProduct);
            alert("Product has been added")
        }
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.productsArray = action.payload;
            console.log(action.payload)
            state.errMsg = ''
        },
        [fetchProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [postProduct.rejected]: (state, action) => {
            alert(
                'Your product could not be posted\nError: ' +
                (action.error ? action.error.message : 'Fetch failed')
            )
        },
        [fetchCategories.pending]: (state) => {
            state.categoriesLoading = true;
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.categoriesLoading = false;
            state.categoriesArray = action.payload;
            state.catErrMsg = ''
        },
        [fetchCategories.rejected]: (state, action) => {
            state.categoriesLoading = false;
            state.catErrMsg = action.error ? action.error.message : 'Category Fetch failed';
        }
    }
})

export const productsReducer = productsSlice.reducer;
export const { addProduct } = productsSlice.actions;

export const selectAllProducts = (state) => {
    return state.products.productsArray;
};