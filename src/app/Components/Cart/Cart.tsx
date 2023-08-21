'use client'
import { MdOutlineShoppingBag } from "react-icons/md"
import { GrClose } from "react-icons/gr"
import "./Cart.css"
const Cart = ({CartInfo}: any) => {
    const closeCart = () => {
        CartInfo.cartOpen = false;
        // alert('check')
    }
    return(
        <div className="row cartFixed">
            <div className="bgGrayBody">
                
            </div>
            <div className="CartMainDiv">
            <div>
            <div className="rowFirstItemsDiv">
            <div className="">
                    <MdOutlineShoppingBag />
            </div>
            <p>{CartInfo?.cartData?.length} items</p>
            </div>
            <GrClose onClick={closeCart}/>
            </div>
            
            </div>
        </div>
    )
}
export default Cart