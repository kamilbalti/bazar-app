'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import AllStar from "./AllStar"
import { useDispatch } from "react-redux"
import { addItems, changeItemsQuantity, setCartData } from "../../../Redux-Toolkit/BazarSlice"
import { useAppDispatch, useAppSelector } from "../../../Redux-Toolkit/Hook"
const Box = ({item, check, index1, index2}: any) => {
    const dispatch = useAppDispatch()
    const [num, setNum] = useState(0)
    const cartData: any = useAppSelector((e) => e.cartData)
    const ItemsQuantity: any = useAppSelector((e) => e.ItemsQuantity)
    const addNum = () => {
        let objInd = {index1: index1, index2: index2, quantity: 1}
        dispatch(changeItemsQuantity(objInd))
        if(ItemsQuantity[item.index1][item.index2] == 0){
            let tempData = {...item}
            let temp = item.delVal;
            temp = temp.split("$")
            temp = temp[1]
            tempData.delVal = temp
            let tempPara = item.name
            tempPara = tempPara.split("")
            if(tempPara.length <= 17)
                tempPara = tempPara.join("")
            else{
                tempPara.splice( 17, tempPara.length)
                tempPara.push("...")
                tempPara = tempPara.join("")
                tempData.name= tempPara
            }
            dispatch(addItems(tempData))
            // setNum(num+1)
        // ItemsQuantity[index1][index2] = num
        // num > 0 ? 
    // : false
}
    }
    
    const subtractNum = () => {
        let objInd = {index1: index1, index2: index2, quantity: -1}
        let temp = cartData
        if(ItemsQuantity[item.index1][item.index2] > 0){
        temp = temp.filter((item2: any, index2: any) => ItemsQuantity[item2.index1][item2.index2] !== 1)
        dispatch(changeItemsQuantity(objInd))
        // if(num > 0)
        setNum(num-1)
        dispatch(setCartData(temp))}
        // if(num == 0)
        // ItemsQuantity[index1][index2] = num
        // num > 0 >
}
    // let changeCart = 0
    // useEffect(() => {
    //     changeCart += 1
    // },[cartData])
// dispatch(changeItemsQuantity(indexObj))
// item.num = num
// dispatch(changeItemsQuantity(indexObj))
// useEffect(() => {
//     alert(index2 + " " + index)
// },[index])
// useEffect(() => {
//     alert(index2 + " " + index)
// },[index2])
// useEffect(() => {
//     // if(!changeCart)
// },[num, !changeCart])

// item.num = num
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
                <p onClick={subtractNum} className={ ItemsQuantity[index1][index2] != false && ItemsQuantity[index1][index2] != 0 ? "redCol minusSign" : 'redCol minusSign hidden'}>–</p>
                <p className={ItemsQuantity[index1][index2] != false && ItemsQuantity[index1][index2] != 0 ? "blackNum" : "blackNum hidden"}>{ItemsQuantity[index1][index2]}</p>
                <p onClick={addNum} className="redCol">+</p>
            </div>
        </div>
        </div>
    )
}
export default Box