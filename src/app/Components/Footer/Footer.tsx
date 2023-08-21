import "./Footer.css"
// import { FaAppStoreIos } from "react-icons/fa"
// import { BiLogoPlayStore } from "react-icons/bi"
import { ForthFootColData, SecondFootColData, ThirdFootColData } from "@/app/data/FooterData"
import SecondFootCol from "./SecondFootCol"
import FootCol1 from "./FootCol1"
const Footer = () => {
    
    return(
        <div className="FooterDiv FlashRowDiv">
            {
                <>
                    <FootCol1 />
                    <SecondFootCol className={"SecondFootCol"} Obj={SecondFootColData}/>
                    <SecondFootCol className={"SecondFootCol ThirdFootCol"} Obj={ThirdFootColData}/>
                    <SecondFootCol className={"SecondFootCol ForthFootCol"} Obj={ForthFootColData}/>
                </>
            }
        </div>
    )
}   
export default Footer