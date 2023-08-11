import { FirstCarousalData } from "@/app/data/firstCarousalData"
import Carousal from "./Carousal"
const FirstCarousal = () => {
    const carNum = 1
    const val = 12.4
    const temp = 4
    return(
        <Carousal carNum={carNum} val={val} carousalData={FirstCarousalData} temp={temp}/>
    )
}
export default FirstCarousal