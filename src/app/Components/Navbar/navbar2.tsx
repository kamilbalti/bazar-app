// 'use client'
import React, { useEffect, useState } from "react";
import SearchingDiv from "./SearchingDiv";
import { BsChevronDown, BsPerson } from "react-icons/bs"
import { MdOutlineShoppingBag } from "react-icons/md"
// import { CartInfo } from "../../data/MainData/MainData";
// import Car from "../PageBody/Car/Car";
import { BiSolidCategory } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { setCartOpen } from "../../../Redux-Toolkit/BazarSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
const Navbar2 = ({check}: any) => {
    const [ checkOpen, setCheckOpen ] = useState(true)
    const [ width, setWidth ] = useState(0)
    const dispatch = useDispatch()
    const cartData: any = useSelector((e: any) => e.cartData)
    useEffect(() => {
        if(typeof window !== 'undefined')
        setWidth(window.innerWidth)
    },[typeof window !== 'undefined' && window.innerWidth])
    const OpenCart = () => {
        dispatch(setCartOpen(true))
    }
    return(
        <div className={check == "Complete" ? "posFixed" : (check == "true" ? "posFixed loading" : "whiteBgColor")}>
            <div className="navbar2">
            <img height="44" src="https://bazaar.ui-lib.com/assets/images/logo2.svg" alt="logo" className="bazarPic secondNavToHideItems"/> 
            <AiOutlineMenu className="secondNavHideItems secondNavMenu"/>
            <div className={ check ? "catIconDiv row" : "catIconDiv row hideIcon"}>
            <BiSolidCategory className="catIcon butIcon row"/>
            <BsChevronDown className="catDownBut downCatBut"/>
            </div>
            <SearchingDiv />
            <img className="inputDiv secondNavHideItems" height="44" src="https://bazaar.ui-lib.com/assets/images/bazaar-black-sm.svg" alt="logo"/>
            <div className="row twoIconDiv">
                <div className="navMainIcon secondNavHideItems">
                    <AiOutlineSearch />
                </div>
                <div className="navMainIcon">
                    <BsPerson />
                </div>
                <div className="cartImgDiv">
                    <div className="navMainIcon" onClick={OpenCart}>
                        <MdOutlineShoppingBag />
                    </div>
                    {cartData.length !== 0 ? <p className="cartItemTopNum">{cartData.length}</p>: false}
                </div>
            </div>
        </div>
        </div>
    )
}
export default Navbar2;