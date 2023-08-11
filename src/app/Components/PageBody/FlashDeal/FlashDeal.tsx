import FirstCarousal from "../FirstCarousal"
import { FirstCarousalData } from "@/app/data/firstCarousalData"
import "./FlashDeal.css"
import {IoIosFlash} from "react-icons/io"
const FlashDeal = () => {
    return(
        <div className="FlashDealDiv">
            <div className="row headingMainDiv">
            <IoIosFlash className="flashIcon"/>
            {/* <img src="https://cdn-icons-png.flaticon.com/128/252/252590.png" /> */}
            <h2 className="flashHead">Flash Deals</h2>
            </div>
            <div>
                <FirstCarousal />
            </div>
        </div>
    )
}
export default FlashDeal