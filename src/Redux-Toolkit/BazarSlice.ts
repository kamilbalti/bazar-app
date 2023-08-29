'use client';
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    cartOpen: false,
    cartData: [],
    ItemsQuantity: [
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]] 
}
export const bazar = createSlice({
    name: 'Bazar',
    initialState,
    reducers: {
            addItems: (state: any, action) => {
            state.cartData.push(action.payload)
        },            
            changeItemsQuantity: (state: any, action) => {
                state.ItemsQuantity[action.payload?.index1][action.payload?.index2] += action.payload.quantity
            },
            setItemsQuantity: (state: any, action) => {
                state.ItemsQuantity = action.payload
            },
            setCartOpen: (state: any, action) => {
                state.cartOpen = action.payload
            },
            setCartData: (state: any, action) => {
                state.cartData = action.payload
            }
    }
    }
)
// const bazarReducer = bazar.reducer
export const {addItems, changeItemsQuantity, setCartOpen, setCartData, setItemsQuantity} = bazar.actions
export default bazar.reducer;