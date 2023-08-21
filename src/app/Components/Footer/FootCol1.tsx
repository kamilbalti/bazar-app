import { FaAppStoreIos } from "react-icons/fa"
import { BiLogoPlayStore } from "react-icons/bi"
const FootCol1 = () => {
    return(
        <div className="FootCol1">
                <img className="footBazarImg" src="https://bazaar.ui-lib.com/assets/images/logo.svg"/>
                <p className="FootCol1Para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in 
                    gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit 
                    at amet.
                </p>
                <div className="FlashRowDiv">
                    <button className="footerButton">
                        <BiLogoPlayStore className="footerButIcon" />
                    <div className="footerButtonParaDiv">
                        <span className="footerButtonSpan">Get it on</span>
                        <b className="footerAppIcon">Google Play</b></div>
                    </button>
                    <button className="footerButton">
                        <FaAppStoreIos className="footerButIcon" />
                    <div className="footerButtonParaDiv">
                        <span className="footerButtonSpan">Download on the</span>
                        <b className="footerAppIcon">App Store</b></div>
                    </button>
                </div>
            </div>
    )
}
export default FootCol1