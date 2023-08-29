import { CategoriesData } from "@/app/data/CategoriesData"
import Carousal from "../Carousal"
import { useEffect, useState } from "react"
const SecondCarousal = () => {
    let carNum = 2;
    const [val, setVal] = useState(20)
    const [temp, setTemp] = useState(2)
    useEffect(() => {
        setTemp(window.innerWidth >= 950 ? 2 : ((window.innerWidth >= 650 ? 3 : 4)))
    })
    return(
        <Carousal carNum={carNum} val={val} carousalData={CategoriesData} temp={temp}/>
    )
}
export default SecondCarousal