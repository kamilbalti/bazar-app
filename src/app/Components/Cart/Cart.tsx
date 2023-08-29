'use client'
import { MdOutlineShoppingBag } from "react-icons/md"
import { GrClose } from "react-icons/gr"
import "./Cart.css"
import { BsHandbag } from "react-icons/bs"
import { useEffect, useState } from "react"
import { changeItemsQuantity, setCartData, setCartOpen, setItemsQuantity } from "../../../Redux-Toolkit/BazarSlice"
import { useAppDispatch, useAppSelector } from "@/Redux-Toolkit/Hook"
const Cart = () => {
    const dispatch = useAppDispatch()
    const cartData: Array<Object> = useAppSelector((e) => e.cartData)
    const ItemsQuantity: Array<any> = useAppSelector((e) => e.ItemsQuantity)
    const [ totalVal, setTotalVal ] = useState(1)
    const [num, setNum] = useState(0)
    const [tempVal, setTempVal] = useState(1)
    const closeCart = () => {
        dispatch(setCartOpen(false))
    }
    const addNum = (item: any) => {
        setNum(num+1)
        let indObj = {index1 : item.index1, index2: item.index2, quantity: 1}
        dispatch(changeItemsQuantity(indObj))
        let tempTotalVal = item.totalVal * (ItemsQuantity[item.index1][item.index2]+1) 
        setTempVal(tempTotalVal)
    }
    const subtractNum = (index2: number, item2: any) => {
        if(ItemsQuantity[item2.index1][item2.index2] > 1){
            let tempTotalVal = item2.totalVal * (ItemsQuantity[item2.index1][item2.index2]-1) 
            setTempVal(tempTotalVal)
        let indObj = {index1 : item2.index1, index2: item2.index2, quantity: -1}
        dispatch(changeItemsQuantity(indObj))
        setNum(num-1)
    }
}
const removeItem = (index: number, item: any) => {
        let temp = cartData
        let indObj = {index1 : item.index1, index2: item.index2, quantity: -1 * ItemsQuantity[item.index1][item.index2]}
        dispatch(changeItemsQuantity(indObj))
        temp = temp.filter((item2: any, index2: number) => item2 !== item)
        dispatch(setCartData(temp))
    }
    useEffect(() => {
        let tempTotalVal = 0
        // setTotalVal(1)
        // setTotalVal( totalVal *
        cartData.map((item: any, index: number) => {
            tempTotalVal = tempTotalVal + (item.delVal * ItemsQuantity[item.index1][item.index2])
        })
        setTotalVal(tempTotalVal)
        // )
    },[cartData, ItemsQuantity])
    return(
        <div className={"row cartFixed"}>
            <div className={cartData.length !== 0 ? "bgGrayBody" : "bgGrayBody emptGrayBg"} onClick={closeCart}>
                
            </div>
            <div className={cartData.length !== 0 ? "CartMainDiv" : "CartMainDiv emptCartFixed"}>
            <div className={cartData.length >= 4 ?'cartScrollDiv': "noScrollDiv"}>
            <div className="row rowItemsDiv">
            <div className="rowFirstItemsDiv">
            <div className="shoppingBagIcon">
                    <MdOutlineShoppingBag />
            </div>
            <p className="cartItemQuant">{cartData?.length} item</p>
            </div>
            <div className="closeIcon">
                <GrClose onClick={closeCart}/>
            </div>
            </div>
            {cartData.length !== 0 ?
            <div>
            {cartData?.map((item: any, index: number) => 
            <div className="row cartItems">
                <div className="">
                    <p onClick={() => addNum(item)} className="redCol redCircleCol">+</p>
                    <p className="cartItemNum">{ItemsQuantity[item.index1][item.index2]}</p>
                    <p onClick={() => subtractNum(index, item)} className={`redCol minusCircle redCircleCol 
                    ${ItemsQuantity[item.index1][item.index2] != 1 ? " " : " blackCircleCol"}`}>–</p>
                </div>
                <img className="cartItemImg" src={item.ImgSrc}/>
                <div className="cartIntroDiv">
                    <p className="cartIntroName">{item.name}</p>
                    <p className="cartIntroPrice">${item.delVal} x {ItemsQuantity[item.index1][item.index2]}</p>
                    <p className="cartIntroTotalPrice">{"$" + (item.delVal)*ItemsQuantity[item.index1][item.index2] + ".00"}</p>
                </div>
                <div className="closeIcon closeChildIcon">
                    <GrClose onClick={() => removeItem(index, item)}/>
                </div>
            </div>    
            )}
            </div>
            : 
            <div className="emptCartBag">
            <img src="https://bazaar.ui-lib.com/assets/images/logos/shopping-bag.svg" width={"100%"}/>
            <p className="emptCartPara">Your shopping bag is empty.<br/>Start shopping</p>    
            </div>}
            </div>
            {cartData.length > 0 ?
                <div className="downButton">
                    <button className="cartDownButton checkOutBut">Checkout Now{` ($${totalVal}.00)`}</button>
                    <button className="cartDownButton viewCartBut">View Cart</button>
                </div>
            : false}
        </div>
        </div>
    )
}
export default Cart