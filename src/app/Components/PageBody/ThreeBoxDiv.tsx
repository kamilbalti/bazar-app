import MiniDiv from "./MiniDiv"
import Box from "./Box"
import Heading from "./Heading"

const ThreeBox = ({data, miniData, head, ind, index}: any) => {
    return(
        <div className="FlashRowDiv ThreeBoxMainDiv">
            <MiniDiv data={miniData} ind={ind}/>
            <div className="ThreeBoxDiv">
            <Heading name={head} nameClass="ThreeBoxHeading" divClass="ThreeBoxHeadDiv" viewHead={'viewHeadDiv2'}/>
            {/* <h1 className="ThreeBoxHeading">{head}</h1> */}
            <div className="FlashRowDiv wrap">
            {   
                data?.map((item2: any, index2: any) => 
                <Box item={item2} check={'flashBox2'} index1={index} index2={index2}/>
                )
            }
            </div>
            </div>
        </div>
    )
}
export default ThreeBox