'use client'
import { MdOutlineShoppingBag } from "react-icons/md"
import { GrClose } from "react-icons/gr"
import "./Cart.css"
import { BsHandbag } from "react-icons/bs"
import { useEffect, useState } from "react"
import { changeItemsQuantity, setCartOpen } from "../../../Redux-Toolkit/BazarSlice"
import { useAppDispatch, useAppSelector } from "@/Redux-Toolkit/Hook"
// import { ItemsQuantity } from "@/app/data/MainData/ItemQuantity"
const Cart = ({cartInfo}: any) => {
    const dispatch = useAppDispatch()
    const cartData: any = useAppSelector((e) => e.cartData)
    const ItemsQuantity: any = useAppSelector((e) => e.ItemsQuantity)
    const [num, setNum] = useState(0)
    const closeCart = () => {
        dispatch(setCartOpen(false))
        // cartInfo.cartOpen = false;
        // alert('check')
    }
    let temp = cartData
    const addNum = (index: any) => {
        // alert(index)
        setNum(num+1)
        let cartNum = cartData[index]
        let indObj = {index1 : cartNum.index1, index2: cartNum.index2, quantity: 1}
        dispatch(changeItemsQuantity(indObj))
    }
    const subtractNum = (index: any, item2: any) => {
        let temp = cartData
        if(num > 0){
        let cartNum = cartData[index]
        let indObj = {index1 : cartNum.index1, index2: cartNum.index2, quantity: -1}
        dispatch(changeItemsQuantity(indObj))
        setNum(num-1)}
        else if(num == 0)
        temp.filter((item: any, index: any) => item.index1 != item2.index1 && item.index2 != item2.index2 )
        
    }
    // useEffect(() => {
    //     // cartData.map((item: any, index: any) => console.log(item.index1 + " " + item.index2))
    // },[cartData])

    return(
        <div className={"row cartFixed"}>
            <div className={cartData.length !== 0 ? "bgGrayBody" : "bgGrayBody emptGrayBg"}>
                
            </div>
            <div className={cartData.length !== 0 ? "CartMainDiv" : "CartMainDiv emptCartFixed"}>
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
                    {/* <p onClick={subtractNum} className={ item?.num != 0 ? "redCol minusSign" : 'redCol minusSign hidden'}>–</p> */}
                    {/* <p className={item?.num != 0 ? "blackNum" : "blackNum hidden"}>{item.num}</p> */}
                    <p onClick={() => addNum(index)} className="redCol redCircleCol">+</p>
                    <p className="cartItemNum">{ItemsQuantity[item.index1][item.index2]}</p>
                    <p onClick={() => subtractNum(index, item)} className={`redCol minusCircle redCircleCol 
                    ${ItemsQuantity[item.index1][item.index2] != 0 ? " " : " blackCircleCol"}`}>–</p>
                </div>
                <img className="cartItemImg" src={item.ImgSrc}/>
            </div>    
            )}
            </div>
            : 
            <div className="emptCartBag">
            <img src="https://bazaar.ui-lib.com/assets/images/logos/shopping-bag.svg" width={"100%"}/>
            <p className="emptCartPara">Your shopping bag is empty.<br/>Start shopping</p>    
            </div>}
            </div>
        </div>
    )
}
export default Cart