'use client'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import Box from "./Box"
import React, {useState } from "react"
import HeaderItem from "../Header/HeaderItem"
import SecondCarousalBox from "./SecondCarousalBox"
import ThirdCarousalBox from "./ThirdCarousalBox"

const Carousal = ({carNum, val, carousalData, temp}: any) => {
    const [ num, setNum ] = useState(0)
    const addIndex = () => {
        
        if(num > (val*-temp))
            setNum(num - val)
        else if(carNum == 1)
            setNum(0)
        if(carNum == 4){
            setNum(-50)
        }
    }
    const removeIndex = () => {
        if(num <= -5)
        setNum(num+val)
        else if(carNum == 1)
        setNum(val*-temp)
        if(carNum == 4)
            setNum(0)
        }
        // setNum(0)
    return(
        <>
        {carNum <=3 ?
        <div className="flashRelative">
            <AiOutlineArrowLeft onClick={removeIndex} className={carNum == 1 ? `carArrow carLeft` :
            (carNum == 2 ? `carArrow catCarArrow carLeft ${num < 0 ? ' changeBg': " noChange"}`: 
            carNum == 3 ? `carArrow top40 carLeft ${num < 0 ? ' changeBg': " noChange"}`: "")}
        />
        <div className="div80">
        <div style={{transform: `translateX(${num}%)`}} 
        className={carNum == 1 ? `FlashRowDiv carousalDiv`: carNum == 2 ? `FlashRowDiv carousalDiv2` : 
        carNum == 3 ? "FlashRowDiv carousalDiv ThirdCarMainDiv" : ""}>
                <div className="fullWidth">
                {
                    carousalData?.map((item: any, index: number) => (
                    carNum == 1 ?
                        <Box item={item} index1={0} index2={index}/>:
                    carNum == 2 ?
                    <SecondCarousalBox item={item}/>
                    : 
                    <ThirdCarousalBox item={item}/>
                    ))
                }
                </div>
        </div>
        </div>
            <AiOutlineArrowRight onClick={addIndex} className={ carNum == 1 ? `carArrow carRight` : 
            (carNum == 2 ? `carArrow catCarArrow carRight ${(num > -val*2 ? ' changeBg': " noChange")}` : 
            carNum == 3 ? `carArrow top40 carRight ${(num > -val*3 ? ' changeBg': " noChange")}` :
            "")} />
        </div>
        :
        <div className="Header">
            <div className="div80">
                <div style={{transform: `translateX(${num}%)`, transition: '0.5s ease'}} className="carousalDiv carousalDiv4 row">
                    <HeaderItem />
                    <HeaderItem />
                </div>
            </div>
            <span className="radioBut">
            <input onClick={removeIndex} className="radio" name="index"  type="radio"/>
            <input onClick={addIndex} className="radio" name="index" type="radio"/>
            </span>
        </div>
        }
        </>
    )
}
export default Carousal;