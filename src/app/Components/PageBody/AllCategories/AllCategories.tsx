import { AllCategoriesData } from "@/app/data/AllCategoriesData"
import {BiSolidCategory} from "react-icons/bi"

const AllCategories = () => {
    return(
        <div>
            <div className="FlashRowDiv">
                <BiSolidCategory className="butIcon"/>
                <h1>Categories</h1>
                {AllCategoriesData.map((item: any,index: number) => 
                    <div className="FlashRowDiv">
                        <img width={"50px"} src={item.icon}/>
                        <p>{item.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default AllCategories