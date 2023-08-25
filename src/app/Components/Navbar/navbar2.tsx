// 'use client'
import React, { useEffect, useState } from "react";
import SearchingDiv from "./SearchingDiv";
import { BsChevronDown, BsPerson } from "react-icons/bs"
import { MdOutlineShoppingBag } from "react-icons/md"
import { CartInfo } from "../../data/MainData/MainData";
import Car from "../PageBody/Car/Car";
import { BiSolidCategory } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { setCartOpen } from "../../../Redux-Toolkit/BazarSlice";
// import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../Redux-Toolkit/Hook";
const Navbar2 = ({check}: any) => {
    const [ checkOpen, setCheckOpen ] = useState(true)
    const [ width, setWidth ] = useState(0)
    const dispatch = useAppDispatch()
    const cartOpen: any = useAppSelector((e) => e.cartOpen)
    useEffect(() => {
        setWidth(window.innerWidth)
    },[window.innerWidth])
    // const ItemsQuantity: any = useAppSelector((e) => e.ItemsQuantity)
    const OpenCart = () => {
        // console.log(ItemsQuantity, " cartOpen ")
        // alert(cartOpen)
        dispatch(setCartOpen(true))
        // alert(cartOpen)
        // alert('check')
        // if(!checkOpen)
        // setCheckOpen(true);
        // alert("testing")
        // CartInfo.cartOpen = checkOpen;
    }
    // alert(CartInfo.cartOpen)
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
                <div className="navMainIcon" onClick={OpenCart}>
                    <MdOutlineShoppingBag />
                </div>
            </div>
        </div>
        </div>
    )
}
export default Navbar2;