import { AllCategoriesData } from "@/app/data/AllCategoriesData"
import {BiSolidCategory} from "react-icons/bi"
import "./AllCategories.css"
import Heading from "../Heading"

const AllCategories = () => {
    return(
        <div className="AllCategoriesMainDiv">
            {/* <div className="FlashRowDiv CategoryHeadDiv"> */}
                {/* <BiSolidCategory className="butIcon"/> */}
                {/* <BiSolidCategory className="butIcon flashIcon"/>
                <h1 className="CategoryHead">Categories</h1> */}
                <Heading icon={<BiSolidCategory className="butIcon flashIcon"/>} name="Categories" 
                nameClass="CategoryHead" divClass="FlashRowDiv CategoryHeadDiv" viewHead={'viewHeadDiv4'}/>
                {/* </div> */}
                <div className="FlashRowDiv wrap">
                {AllCategoriesData.map((item: any,index: number) => 
                    <div className="AllCatWhiteBg">
                        <img width={"52px"} src={item.icon}/>
                        <p>{item.name}</p>
                    </div>
                )}
                </div>
        </div>
    )
}
export default AllCategories