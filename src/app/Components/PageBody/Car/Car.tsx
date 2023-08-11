import Box from "../Box"
import { CarsData } from "@/app/data/CarsData"
import { FirstCarousalData } from "@/app/data/firstCarousalData"
import MiniDiv from "../MiniDiv"
import { MiniCarsData } from "@/app/data/MiniCarsData"
import ThreeBox from "../ThreeBoxDiv"
const Car = () => {
    return(
        <>
            <ThreeBox data={CarsData} miniData={MiniCarsData} head={"Cars"}/>
        </>
        // <div className="FlashRowDiv">
        //     <MiniDiv data={MiniCarsData}/>
        //     {
        //         CarsData.map((item: any, index: any) => 
        //             <Box item={item}/>
        //         )
        //     }
        // </div>
    )
}
export default Car