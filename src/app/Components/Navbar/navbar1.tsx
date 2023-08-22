import IconDiv from "./iconDiv";
import "./navbar.css"
const Navbar1 = () => {
    return(
        <div className="navbar1MainDiv">
        <div className="blueBgColor">
            <div className="firstNavParaDiv">
                <p className="bgRedBut">HOT</p>
                <p className="shipNavPara">Free Express Shipping</p>
            </div>
            <IconDiv />
        </div>
        </div>
    )
}
export default Navbar1;