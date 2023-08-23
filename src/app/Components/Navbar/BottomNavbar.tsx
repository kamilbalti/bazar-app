import { AiOutlineHome } from "react-icons/ai"
import { BiShoppingBag } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"
import { TbCategory } from "react-icons/tb"

const BottomNavbar = () => {
    return(
        <div className="BottomNavbarMainDiv">
            <div className="BottomNavbarChildDiv">
                <div className="bottomIcon">
                    <AiOutlineHome className="bottomIcon"/>
                </div>
                <p className="BottomNavbarPara">Home</p>
            </div>
            <div className="BottomNavbarChildDiv">
                <div className="bottomIcon">
                    <TbCategory className="bottomIcon"/>
                </div>
                <p className="BottomNavbarPara">Category</p>
            </div>
            <div className="BottomNavbarChildDiv">
                <div className="bottomIcon">
                    <BiShoppingBag className="bottomIcon"/>
                </div>
                <p className="BottomNavbarPara">Cart</p>
            </div>
            <div className="BottomNavbarChildDiv">
                <div className="bottomIcon">
                    <BsPerson className="bottomIcon"/>
                </div>
                <p className="BottomNavbarPara">Account</p>
            </div>
        </div>
    )
}
export default BottomNavbar