'use client';
// import ItemsQuantity from "@/app/data/MainData/ItemQuantity"
// import { MainData } from "@/app/data/MainData/MainData"
// import { FirstCarousalData } from "@/app/data/firstCarousalData"
import { createSlice } from "@reduxjs/toolkit"
    
// type InitialState = {
//     value: initialType;
// }
// type initialType = {
//     cartData: Array<Object>,
//     cartOpen: boolean,
//     ItemsQuantity: Array<number>
// }
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
            //     const Item = {
            //     // id: nanoid,
               //     item: action.payload
            // }:
            // let temp = state.cartData
            state.cartData.push(action.payload)
            // state.cartData = temp
        },
            
        // Bazar = {
            // state.ItemsQuantity = action.payload
            // MainData.ItemsQuantity = action.payload
            changeItemsQuantity: (state: any, action) => {
                // alert(action?.payload?.index1+ " " + action?.payload?.index2)
                state.ItemsQuantity[action.payload?.index1][action.payload?.index2] += action.payload.quantity
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
export const {addItems, changeItemsQuantity, setCartOpen, setCartData} = bazar.actions
export default bazar.reducer;