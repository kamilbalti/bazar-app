import SearchingDiv from "./SearchingDiv";
import { BsPerson } from "react-icons/bs"
import { MdOutlineShoppingBag } from "react-icons/md"
const Navbar2 = () => {
    return(
        <div className="whiteBgColor">
            <img height="44" src="https://bazaar.ui-lib.com/assets/images/logo2.svg" alt="logo" className="bazarPic "/>
            <SearchingDiv />
            <div className="row twoIconDiv">
                <div className="navMainIcon">
                    <BsPerson />
                </div>
                <div className="navMainIcon">
                    <MdOutlineShoppingBag />
                </div>
            </div>
        </div>
    )
}
export default Navbar2;