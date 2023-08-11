import { LiaTwitter, LiaInstagram, LiaAngleDownSolid } from "react-icons/lia"
import { BiLogoFacebookSquare } from "react-icons/bi"
import { PiInstagramLogo } from "react-icons/pi"
import Heading from "./Heading"

const IconDiv = () => {
    return(
        <div className="firstNavParaDiv">
            <button className="langDiv">
                <Heading linkName="DE"/>
            </button>
            <LiaTwitter className="multiIcon" />
            <BiLogoFacebookSquare className="multiIcon" />
            <PiInstagramLogo className="multiIcon" />
        </div>
    )
}
export default IconDiv