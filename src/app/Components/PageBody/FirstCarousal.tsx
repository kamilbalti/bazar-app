import { FirstCarousalData } from "@/app/data/firstCarousalData"
import Carousal from "./Carousal"
import { useEffect, useState } from "react"
const FirstCarousal = () => {
    const carNum = 1
    const [val, setVal] = useState(12.5)
    const [temp, setTemp] = useState(4)
    useEffect(() => {
        if(window !== undefined){
        setVal(window.innerWidth >= 949 ? 12.4 : 12.5) 
        setTemp(window.innerWidth >= 950 ? 4 : ((window.innerWidth >= 650 ? 5 : (window.innerWidth >= 500 ? 6 : 7))))
    }})
        
    return(
        <Carousal carNum={carNum} val={val} carousalData={FirstCarousalData} temp={temp}/>
    )
}
export default FirstCarousal