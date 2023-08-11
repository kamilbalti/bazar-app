import { CategoriesData } from "@/app/data/CategoriesData"
import Carousal from "../Carousal"
const SecondCarousal = () => {
    let carNum = 2;
    let val = 20
    const temp = 2;
    return(
        <Carousal carNum={carNum} val={val} carousalData={CategoriesData} temp={temp}/>
    )
}
export default SecondCarousal