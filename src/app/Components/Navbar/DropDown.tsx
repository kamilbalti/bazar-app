import {AiOutlineRight} from "react-icons/ai"
// import { NavCategoriesData } from "@/app/data/NavData/NavCategoriesData"
import { useState, useEffect } from "react"
import { NavCategoriesData } from "@/app/data/NavData/NavCategoriesData";
const DropDown = ({ indexProp, secondChildClass, mega, num, name, data, childDivClass, childDivChildClass, val, setVal, hideDropDown} : any) => {
    // const [name, setName] = useState("");
    const [showMoreDetail, setShowMoreDetail]: any = useState(100);
    const [showMoreDetail2, setShowMoreDetail2]: any = useState(100)
    const [showMoreDetail3, setShowMoreDetail3]: any = useState(100)

    useEffect(() => {
        if(mega == true || indexProp == 2)
        setShowMoreDetail(0)
        else
        setShowMoreDetail(100)
        setShowMoreDetail2(100)
        setShowMoreDetail3(100)
    },[num])
    const mouseOver = (index: number) => {
        setShowMoreDetail(index)
    }
    const mouseOver2 = (index2: number, index: number) => {
        setShowMoreDetail2(index)
        setShowMoreDetail3(index2)
    }
    const changeVal = (item: any) => {
        if(val)
        {setVal(item?.name)
        hideDropDown()}
    }
return(
    <div className={name}>
            {data[0] ?<div className={childDivClass}>
            {
                data.map((item: any, index: number) =>
                <div onMouseOver={() => mouseOver(index)} className={childDivChildClass}
                 onClick={(() => changeVal(item))}
                >
                <p id={item?.name} className="">
                    {item?.name}
                </p>
                {item?.arr && item?.name ? <AiOutlineRight /> : false}
                </div>
                )
                
            }
                </div> : false}
                {data[showMoreDetail]?.arr ? <div className={((`${secondChildClass ? secondChildClass :(data[showMoreDetail]?.arr[0].head? "row secondDropDown" : indexProp ?  "row secondDropDown2 secondDropDownLeft" : "row secondDropDown2" )}  ${indexProp == 2? ' FullScreenChildDiv2': ''}`))}>
                <div className={data[showMoreDetail]?.arr[0].head? "row secondDropDownDiv" : "row secondDropDownDiv2"}>
                    {data[showMoreDetail]?.arr?.map((item: any, index: number) => 
                    <div className={mega ? (index % 2 == 0 ? 'BlackMega MegaChild' : 'WhiteMega MegaChild'): indexProp == 2 ?  showMoreDetail == 0 ? "navCatOptionhalfDiv" : "navCatOptionhalfDiv2" :  (item.head? " navCatOptionPara2" : "navCatOptionPara3")  }>
                    <h4 className="navCatOptionHeading">{item?.head}</h4>
                    {item?.arr?.map((item2: any, index2: number) => 
                    <div className={indexProp == 2 && showMoreDetail !== 0 ? "dropDownLargePara" :(item2?.name? "row dropDownNameDiv":"row")} onMouseOver={() => mouseOver2(index2, index)}>
                    {item2.name?<p className={indexProp == 2 && showMoreDetail !== 0 ? "dropDownLargePara" :"dropDownPara"}>{item2.name}</p>:<p className={"dropDownPara"}>{item2}</p>}
                    {item2?.arr ? <AiOutlineRight /> : false}
                    </div>
                    )
                    }
                    <div>
                    </div>
                    </div>
                )}
                </div>
                {data[showMoreDetail]?.img ? 
                <img src={data[showMoreDetail]?.img} width={'150px'}/>: false}
                </div> : false}
                
                {
                    showMoreDetail3 == 0 && showMoreDetail == 2 && (data == NavCategoriesData) && data[showMoreDetail]?.arr?
                    <div className={ data[showMoreDetail]?.arr[showMoreDetail3]?.arr[showMoreDetail2]? "thirdDropDown" : ""}>
                {
                data[showMoreDetail]?.arr? data[showMoreDetail]?.arr[showMoreDetail3]?.arr[showMoreDetail2]?.arr ? 
                data[showMoreDetail]?.arr[showMoreDetail3]?.arr[showMoreDetail2]?.arr?.map((item: any, index: number) => 
                <div className="navCatOptionPara2 column">
                    <h4 className="navCatOptionHeading">{item?.head}</h4>
                    <div className="dropDownPara">{item?.arr?.map((item2: any, index2: number) => 
                        <p className='navCatChild'>{item2}</p>
                    )}</div>
                    </div>    
                ): false : false
            }   
                    <div className="row">
                    <h4>{data[showMoreDetail]?.arr[showMoreDetail3]?.arr[showMoreDetail2]?.Heading}</h4>
                    <p>{data[showMoreDetail]?.arr[showMoreDetail3]?.arr[showMoreDetail2]?.Para}</p>
                    <img src={data[showMoreDetail]?.arr[showMoreDetail3]?.arr[showMoreDetail2]?.img2} />
                    </div>
                </div>
                : false
            }
            </div>
    )
}
export default DropDown