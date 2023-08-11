import "./Footer.css"
import { FaAppStoreIos } from "react-icons/fa"
import { BiLogoPlayStore } from "react-icons/bi"
import { ForthFootColData, SecondFootColData, ThirdFootColData } from "@/app/data/FooterData"
import SecondFootCol from "./SecondFootCol"
const Footer = () => {
    
    return(
        <div className="FooterDiv FlashRowDiv">
            <div className="FootCol1">
                <img className="footBazarImg" src="https://bazaar.ui-lib.com/assets/images/logo.svg"/>
                <p className="FootCol1Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in 
                    gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit 
                    at amet.
                </p>
                <div className="FlashRowDiv">
                    <button className="footerButton"><BiLogoPlayStore /><div><p>Get it on</p><b>Google Play</b></div></button>
                    <button className="footerButton"><FaAppStoreIos /><div><p>Download on the</p><b>App Store</b></div></button>
                </div>
            </div>
            {
                <>
                    <SecondFootCol Obj={SecondFootColData}/>
                    <SecondFootCol Obj={ThirdFootColData}/>
                    <SecondFootCol Obj={ForthFootColData}/>
                </>
            }
        </div>
    )
}   
export default Footer