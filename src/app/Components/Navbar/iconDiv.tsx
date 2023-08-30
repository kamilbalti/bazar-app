import { LiaTwitter, LiaInstagram, LiaAngleDownSolid } from "react-icons/lia"
import { BiLogoFacebookSquare } from "react-icons/bi"
import { PiInstagramLogo } from "react-icons/pi"
import Heading from "./Heading"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useEffect, useState } from "react"
import DropDown from "./DropDown"
import { NavLangData } from "@/app/data/NavData/NavLangData"
import { useSelector } from "react-redux"

const IconDiv = ({showMoreInfo, setShowMoreInfo}: any) => {
    const [name, setName] = useState("");
    const [num, setNum] = useState(0)
    const [ val, setVal ] = useState("DE")
    const cartOpen: any = useSelector((e: any) => e.cartOpen)
    const showDetail = () => {
        if(!cartOpen)
        (num % 2 == 1)?
        setName('AllLangDiv hideOption'):
        setName('AllLangDiv')
        setNum(num+1)
    }
    useEffect(() => {
        setName('AllLangDiv hideOption');
    },[])
    const linkArr = ["Home", "Mega Menu", "Full Screen Menu", "Pages", "User Account", "Vendor Account"]

    const changeCheck = (i: any) => {
        setShowMoreInfo(i)
    } 
    useEffect(() => {
        if(cartOpen)
        setName('AllLangDiv hideOption')
    },[cartOpen])
    return(
        <>
        <div className="firstNavParaDiv">
            <AiOutlinePlus className={ !showMoreInfo ? "hideIcons" : "hideIconTrue"} onClick={() => changeCheck(true)}/>
            <AiOutlineMinus className={ !showMoreInfo ? "hideIcons hideIconTrue" : "hideIcons" } onClick={() => changeCheck(false)}/>
            <div className={`row firstNavIconDiv ${showMoreInfo ? 'showFirstNavIconDiv' : ""}`}>
            <div className="langeDivCol">
            <button className="langDiv" onClick={showDetail}>
                <Heading linkName={val}/>
            </button>
            <DropDown val={val} setVal={setVal} num={num} name={name} data={NavLangData} 
            childDivClass={'langDropDown'} childDivChildClass={'langOptionPara'} hideDropDown={showDetail}/>
            </div>
            <LiaTwitter className="multiIcon" />
            <BiLogoFacebookSquare className="multiIcon" />
            <PiInstagramLogo className="multiIcon" />
            </div>
        </div>
        </>
    )
}
export default IconDiv