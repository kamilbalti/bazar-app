import IconDiv from "./iconDiv";
import "./navbar.css"
const Navbar1 = () => {
    return(
        <div className="blueBgColor">
            <div className="firstNavParaDiv">
                <p className="bgRedBut">HOT</p>
                <p className="shipNavPara">Free Express Shipping</p>
            </div>
            <IconDiv />
        </div>
    )
}
export default Navbar1;