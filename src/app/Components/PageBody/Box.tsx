'use client'
import Image from "next/image"
import { useState } from "react"
import AllStar from "./AllStar"
const Box = ({item, check}: any) => {
    const [num, setNum] = useState(0)
    const addNum = () => {
        setNum(num+1)
    }
    const subtractNum = () => {
        if(num > 0)
        setNum(num-1)
    }
    item.num = num
    return(
        <div className={ check ? `flashBox ${check}` : `flashBox`}>       
        <div className="flashRelative">
            <img src={item.ImgSrc} className="flashImg" />
            <p className="offPrice">{item?.off}</p>
        </div>
        <div className="row spaceBetween">
            <div className="boxData">
            <p className="boxDataChild">{item?.name}</p>
            <AllStar className={"boxDataChild starDiv starDiv2"}/>
            <p className="boxDataChild"><span className="newPrice">{item?.newVal}</span>
            <span className="oldPrice">{item?.delVal}</span></p>
            </div>
            <div className="column">
                <p onClick={subtractNum} className={ item?.num != 0 ? "redCol minusSign" : 'redCol minusSign hidden'}>–</p>
                <p className={item?.num != 0 ? "blackNum" : "blackNum hidden"}>{item.num}</p>
                    <p onClick={addNum} className="redCol">+</p>
            </div>
        </div>
        </div>
    )
}
export default Box