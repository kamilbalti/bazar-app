// import { CarsData } from "@/app/data/CarsData"
import MiniDiv from "./MiniDiv"
import Box from "./Box"
// import { MiniCarsData } from "@/app/data/MiniCarsData"

const ThreeBox = ({data, miniData, head, ind}: any) => {
    return(
        <div className="FlashRowDiv">
            <MiniDiv data={miniData} ind={ind}/>
            <h1>{head}</h1>
            {   
                data?.map((item: any, index: number) => 
                    <Box item={item}/>
                )
            }
        </div>
    )
}
export default ThreeBox