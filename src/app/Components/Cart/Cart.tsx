'use client'
import { MdOutlineShoppingBag } from "react-icons/md"
import { GrClose } from "react-icons/gr"
import "./Cart.css"
import { BsHandbag } from "react-icons/bs"
import { useState } from "react"
const Cart = ({cartInfo}: any) => {
    const [num, setNum] = useState(0)
    const closeCart = () => {
        cartInfo.cartOpen = false;
        // alert('check')
    }
    const addNum = () => {
        setNum(num+1)
    }
    const subtractNum = () => {
        if(num > 0)
        setNum(num-1)
    }

    return(
        <div className={"row cartFixed"}>
            <div className={cartInfo?.cartData.length !== 0 ? "bgGrayBody" : "bgGrayBody emptGrayBg"}>
                
            </div>
            <div className={cartInfo?.cartData.length !== 0 ? "CartMainDiv" : "CartMainDiv emptCartFixed"}>
            <div className="row rowItemsDiv">
            <div className="rowFirstItemsDiv">
            <div className="shoppingBagIcon">
                    <MdOutlineShoppingBag />
            </div>
            <p className="cartItemQuant">{cartInfo?.cartData?.length} item</p>
            </div>
            <div className="closeIcon">
                <GrClose onClick={closeCart}/>
            </div>
            </div>
            {cartInfo?.cartData.length !== 0 ?
            <div>
            {cartInfo?.cartData?.map((item: any, index: number) => 
            <div className="row cartItems">
                <div className="">
                    {/* <p onClick={subtractNum} className={ item?.num != 0 ? "redCol minusSign" : 'redCol minusSign hidden'}>–</p> */}
                    {/* <p className={item?.num != 0 ? "blackNum" : "blackNum hidden"}>{item.num}</p> */}
                    <p onClick={addNum} className="redCol redCircleCol">+</p>
                    <p className="cartItemNum">{item?.num}</p>
                    <p onClick={subtractNum} className={`redCol minusCircle redCircleCol 
                    ${item?.num !== 0 ? " " : " blackCircleCol"}`}>–</p>
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