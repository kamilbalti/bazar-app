import { MoreForYouData } from "@/app/data/MoreForYouData"
import Box from "../Box"

const MoreForYou = () => {
    return(
        <div className="FlashRowDiv">
            {MoreForYouData?.map((item: any, index: number) => 
                // <div></div>
            <Box item={item}/>
            )}
        </div>
    )
}
export default MoreForYou