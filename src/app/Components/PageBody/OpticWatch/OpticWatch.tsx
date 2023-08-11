import { OpticWatchData } from "@/app/data/OpticWatchData"
import ThreeBox from "../ThreeBoxDiv"
import { MiniOpticWatchData } from "@/app/data/MiniOpticWatchData"

const OpticWatch = () => {
    return(
        <>
        <ThreeBox data={OpticWatchData} miniData={MiniOpticWatchData} head={"Optics / Watch"} ind={6}/>        
        </>
        // <div></div>
    )
}
export default OpticWatch