import { NavAllCategoriesData } from "@/app/data/NavData/NavAllCategoriesData"
import DropDown from "./DropDown"
import Heading from "./Heading"
import { AiOutlineSearch } from "react-icons/ai"
import { useEffect, useState } from "react"
import { useAppSelector } from "@/Redux-Toolkit/Hook"

const SearchingDiv = () => {
    const cartOpen: any = useAppSelector((e) => e.cartOpen)
    const [name, setName] = useState("");
    const [num, setNum] = useState(0)
    const [ val, setVal ] = useState("All Categories")
    const showDetail = () => {
        if(!cartOpen)
        (num % 2 == 1)?
        setName('AllCatDiv AllLangDiv hideOption'):
        setName('AllCatDiv AllLangDiv')
        setNum(num+1)
    }
    useEffect(() => {
        if(cartOpen)
        setName('AllCatDiv AllLangDiv hideOption')
    },[cartOpen])
    useEffect(() => {
        setName('AllCatDiv AllLangDiv hideOption');
    },[])
    return(
        <div className="inputDiv secondNavToHideItems">
            <div className="searchIcon">
                <AiOutlineSearch />
            </div>
            <input placeholder="Searching for..." className="noBorder"/>
            <div>
            <div className="catHead" onClick={showDetail}>
                <Heading linkName={val} downClass="catDownBut"/>
            </div>
            <DropDown val={val} setVal={setVal} num={num} name={name} data={NavAllCategoriesData} 
            childDivClass={'langDropDown noCenter'} childDivChildClass={'allCatOptionPara langOptionPara'} hideDropDown={showDetail}/>
            </div>
        </div>
    )
}
export default SearchingDiv