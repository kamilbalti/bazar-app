'use client'
import {BiSolidCategory} from "react-icons/bi"
import {AiOutlineRight} from "react-icons/ai"
import Heading from "./Heading"
import { NavCategoriesData } from "@/app/data/NavData/NavCategoriesData"
import { useState, useEffect } from "react"
import DropDown from "./DropDown"
import { useAppSelector } from "@/Redux-Toolkit/Hook"
import { NavAllData } from "@/app/data/NavData/NavAllData"
import AllDropDown from "./AllDropDown"

const Navbar3 = ({check}: any) => {
    const [name, setName] = useState("");
    const [num, setNum] = useState(0)
    const cartOpen: any = useAppSelector((e) => e.cartOpen)
    const showDetail = () => {
        if(!cartOpen)
        num % 2 == 1?
        setName('AllOptionDiv hideOption'):
        setName('AllOptionDiv')
        setNum(num+1)
    }
    useEffect(() => {
        setName('AllOptionDiv hideOption');
    },[])
    useEffect(() => {
        if(cartOpen)
        setName('AllOptionDiv hideOption')
    },[cartOpen])
    return(
        <div className={"nav3 whiteBgColor"}>
            <div className="">
            <button className="categories" onClick={showDetail}>
            <BiSolidCategory className="butIcon row"/>
            <p className="catPara">Categories</p>
            <AiOutlineRight className="butIcon left row"/>
            </button>
            <DropDown num={num} name={name} data={NavCategoriesData} childDivClass={'firstDropDown'} childDivChildClass={'row navCatOptionPara'}/>
            </div>
            <AllDropDown />
        </div>
    )
}
export default Navbar3;