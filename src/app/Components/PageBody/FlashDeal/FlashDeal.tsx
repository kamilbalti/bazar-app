import FirstCarousal from "../FirstCarousal"
import { FirstCarousalData } from "@/app/data/firstCarousalData"
import "./FlashDeal.css"
import {IoIosFlash} from "react-icons/io"
import Heading from "../Heading"
const FlashDeal = () => {
    return(
        <div className="FlashDealDiv">
            <Heading icon={<IoIosFlash className="flashIcon"/>} name="Flash Deal" nameClass="flashHead"
            divClass="row headingMainDiv" viewHead={'viewHeadDiv'}
            />
            <div>
                <FirstCarousal />
            </div>
        </div>
    )
}
export default FlashDeal