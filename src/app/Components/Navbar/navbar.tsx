'use client'
import React, { useEffect, useState } from "react";
import Navbar1 from "./navbar1"
import Navbar2 from "./navbar2"
import Navbar3 from "./navbar3"
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
    const [ check, setCheck ]: any = useState(false)
    if(typeof window !== undefined){
    window.onscroll = () => {
        if(window.scrollY >= 360 && check != 'Complete')
        {
            setCheck("true")
            setTimeout(() => {
                if(window.scrollY >= 360 && check != 'Complete')
                setCheck("Complete")
            },300)
        }
        if(window.scrollY >= 360 && check == "complete")
        setCheck("Complete")
        else if(window.scrollY < 360 || window.scrollY == 0){
        setCheck(false)
    }}
    }
    
    useEffect(() => {
        if(typeof window !== undefined){
        if(window.scrollY >= 360)
        {
            setCheck("true")
            setTimeout(() => {
                setCheck("Complete")
            },300)
        }
        else if(window.scrollY < 360)
            setCheck(false)
        }},[])
    return(
    <div className={check ? "navbar navPadding" : "navbar"}>
        <Navbar1 />
        <div className="navbarChildDiv">
        <Navbar2 check={check}/>
        <Navbar3 />
        </div>
        <BottomNavbar />
    </div>
    )
}
export default Navbar