import { LiaTwitter, LiaInstagram, LiaAngleDownSolid } from "react-icons/lia"
import { BiLogoFacebookSquare } from "react-icons/bi"
import { PiInstagramLogo } from "react-icons/pi"
import Heading from "./Heading"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"

const IconDiv = ({showMoreInfo, setShowMoreInfo}: any) => {
    
    const changeCheck = (i: any) => {
        setShowMoreInfo(i)
    } 
    return(
        <>
        <div className="firstNavParaDiv">
            <AiOutlinePlus className={ !showMoreInfo ? "hideIcons" : "hideIconTrue"} onClick={() => changeCheck(true)}/>
            <AiOutlineMinus className={ !showMoreInfo ? "hideIcons hideIconTrue" : "hideIcons" } onClick={() => changeCheck(false)}/>
            <div className={`row firstNavIconDiv ${showMoreInfo ? 'showFirstNavIconDiv' : ""}`}>
            <button className="langDiv">
                <Heading linkName="DE"/>
            </button>
            <LiaTwitter className="multiIcon" />
            <BiLogoFacebookSquare className="multiIcon" />
            <PiInstagramLogo className="multiIcon" />
            </div>
        </div>
        </>
    )
}
export default IconDiv