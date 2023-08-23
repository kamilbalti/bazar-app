import { useState } from "react";
import IconDiv from "./iconDiv";
import "./navbar.css"
const Navbar1 = () => {
    const [ showMoreInfo, setShowMoreInfo ] = useState(false)
    return(
        <div className="navbar1MainDiv">
        <div className={`blueBgColor ${showMoreInfo ? "blueBgColumn" : ""}`}>
            <div className={`firstNavParaDiv ${showMoreInfo ? "hideFalse" : ""}`}>
                <p className="bgRedBut">HOT</p>
                <p className="shipNavPara">Free Express Shipping</p>
            </div>
            <IconDiv showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo}/>
        </div>
        </div>
    )
}
export default Navbar1;