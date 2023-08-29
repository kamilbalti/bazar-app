import { MoreForYouData } from "@/app/data/MoreForYouData"
import "./MoreForYou.css"
import Box from "../Box"
import Heading from "../Heading"

const MoreForYou = () => {
    return(
        <div className="MoreForYouMainDiv">
            <Heading name={'More For You'} nameClass="MoreForHead" divClass="MoreForHeadDiv" viewHead={'viewHeadDiv2'}/>
            {/* <h1 className="MoreForHead">More For You</h1> */}
        <div className="FlashRowDiv wrap MoreForBoxDiv">
            {MoreForYouData?.map((item: any, index: number) => 
            <Box item={item} check={'flashBox3'} index1={4} index2={index}/>
            )}
            </div>
        </div>
    )
}
export default MoreForYou