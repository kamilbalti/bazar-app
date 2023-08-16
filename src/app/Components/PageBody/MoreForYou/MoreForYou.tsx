import { MoreForYouData } from "@/app/data/MoreForYouData"
import "./MoreForYou.css"
import Box from "../Box"

const MoreForYou = () => {
    return(
        <div className="MoreForYouMainDiv">
            <h1 className="MoreForHead">More For You</h1>
        <div className="FlashRowDiv wrap MoreForBoxDiv">
            {MoreForYouData?.map((item: any, index: number) => 
            <Box item={item} check={'flashBox3'}/>
            )}
            </div>
        </div>
    )
}
export default MoreForYou