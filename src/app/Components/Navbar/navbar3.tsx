'use client'
import {BiSolidCategory} from "react-icons/bi"
import {AiOutlineRight} from "react-icons/ai"
import Heading from "./Heading"
import { NavCategoriesData } from "@/app/data/NavData/NavCategoriesData"
import { useState, useEffect } from "react"

const Navbar3 = ({check}: any) => {
    let num = 0;
    const [name, setName] = useState("");
    const [showMoreDetail, setShowMoreDetail] = useState(false);
    const [showMoreDetail2, setShowMoreDetail2] = useState(false)
    const [showMoreDetail3, setShowMoreDetail3] = useState(false)
    const showDetail = () => {
        num++
        num % 2 == 0 ?
        setName('AllOptionDiv hideOption'):
        setName('AllOptionDiv')
        setShowMoreDetail(false)
        setShowMoreDetail2(false)
        setShowMoreDetail3(false)
        // alert(name)
    }
    const mouseOver = (index: any) => {
        setShowMoreDetail(index)
        // alert(showMoreDetail)
    }
    const mouseOver2 = (index2: any, index: any) => {
        setShowMoreDetail2(index2)
        setShowMoreDetail3(index)
        // alert(showMoreDetail)
    }
    // const showMoreDetail = () => {
    //     alert('showMoreDetail')
    // }
    useEffect(() => {
        setName('AllOptionDiv hideOption');
    },[])
    const linkArr = ["Home", "Mega Menu", "Full Screen Menu", "Pages", "User Account", "Vendor Account"]
    // const row
    // NavCategoriesData.map((item, index) => {
    //     item.onMouseOver
    // })
    return(
        <div className={"nav3 whiteBgColor"}>
            <div className="">
            <button className="categories" onClick={showDetail}>
            <BiSolidCategory className="butIcon row"/>
            <p className="catPara">Categories</p>
            <AiOutlineRight className="butIcon left row"/>
            </button>
            <div className={name}>
            <div className='firstDropDown'>
            {
                NavCategoriesData.map((item: any, index: number) =>
                <div onMouseOver={() => mouseOver(index)} className="row navCatOptionPara">
                <p id={item?.name} className="">
                    {item?.name}
                </p>
                {item?.arr ? <AiOutlineRight /> : false}
                </div>
                )
                
            }
                </div>
                {NavCategoriesData[showMoreDetail]?.arr ? <div className={NavCategoriesData[showMoreDetail]?.arr[0].head? "row secondDropDown" : "row secondDropDown2"}>
                <div className={NavCategoriesData[showMoreDetail]?.arr[0].head? "row secondDropDownDiv" : "row secondDropDownDiv2"}>
                    {NavCategoriesData[showMoreDetail]?.arr?.map((item: any, index: Number) => 
                    <div className={item?.head? " navCatOptionPara2" : "navCatOptionPara3"}>
                    <h4 className="navCatOptionHeading">{item?.head}</h4>
                    {item?.arr?.map((item2: any, index2: Number) => 
                    <div className={item2?.name? "row dropDownNameDiv":"row"} onMouseOver={() => mouseOver2(index2, index)}>
                    {item2.name?<p className="dropDownPara">{item2.name}</p>:<p className="dropDownPara">{item2}</p>}
                    {item2?.arr ? <AiOutlineRight /> : false}
                    </div>
                    )
                    }
                    <div>
                    </div>
                    </div>
                )}
                </div>
                {NavCategoriesData[showMoreDetail]?.img ? 
                <img src={NavCategoriesData[showMoreDetail]?.img} width={'150px'}/>: false}
                </div> : false}
                {<div className={NavCategoriesData[showMoreDetail]?.arr[showMoreDetail3]?.arr[showMoreDetail2]? "thirdDropDown":"row"}>
                {
                NavCategoriesData[showMoreDetail]?.arr? NavCategoriesData[showMoreDetail]?.arr[showMoreDetail3]?.arr[showMoreDetail2]?.arr ? 
                NavCategoriesData[showMoreDetail]?.arr[showMoreDetail3]?.arr[showMoreDetail2]?.arr?.map((item: any, index: any) => 
                <div className="navCatOptionPara2 column">
                    <h4 className="navCatOptionHeading">{item?.head}</h4>
                    <div className="dropDownPara">{item?.arr?.map((item2: any, index2: number) => 
                        <p>{item2}</p>
                    )}</div>
                    </div>    
                ): false : false
            }
                </div>
            }
            </div>
            </div>
            <div className="row">
                {linkArr.map((item: any, index: number) => 
                    <div className="linkPara">
                        <Heading linkName={item} downClass="allNavDownIcon"/>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Navbar3;