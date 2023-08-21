'use client'
import React, { useEffect, useState } from "react";
import SearchingDiv from "./SearchingDiv";
import { BsPerson } from "react-icons/bs"
import { MdOutlineShoppingBag } from "react-icons/md"
import { CartInfo } from "../../data/CartData";
import Car from "../PageBody/Car/Car";
const Navbar2 = ({check}: any) => {
    const [ checkOpen, setCheckOpen ] = useState(true)
    const OpenCart = () => {
        CartInfo.cartOpen = true;
        alert('check')
        // if(!checkOpen)
        // setCheckOpen(true);
        // alert("testing")
        // CartInfo.cartOpen = checkOpen;
    }
    // alert(CartInfo.cartOpen)
    return(
        <div className={check == "Complete" ? "posFixed" : (check == "true" ? "posFixed loading" : "whiteBgColor")}>
            <img height="44" src="https://bazaar.ui-lib.com/assets/images/logo2.svg" alt="logo" className="bazarPic "/>
            <SearchingDiv />
            <div className="row twoIconDiv">
                <div className="navMainIcon">
                    <BsPerson />
                </div>
                <div className="navMainIcon" onClick={OpenCart}>
                    <MdOutlineShoppingBag />
                </div>
            </div>
        </div>
    )
}
export default Navbar2;