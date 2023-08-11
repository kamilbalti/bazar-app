// import { useSelector } from "react-redux"
import Categories from "./Categories/Categories"
import FlashDeal from "./FlashDeal/FlashDeal"
import TopFeatured from "./TopFeatured/TopFeatured"
import NewArrival from "./NewArrival/NewArrival"
import BigDiscount from "./NewArrival/BigDiscount"
import "./PageBody.css"
import Car from "./Car/Car"
import MobilePhones from "./MobilePhones/MobilePhones"
import BazarTwoImg from "./BazarTwoImg"
import OpticWatch from "./OpticWatch/OpticWatch"
import AllCategories from "./AllCategories/AllCategories"
import MoreForYou from "./MoreForYou/MoreForYou"
import AdvancedFeature from "./AdvancedFeature/AdvancedFeature"

const PageBody = () => {
    // const {FirstCarousalData}: any = useSelector((e) => e)
    return(
        <div className="PageBody">
            <FlashDeal />
            <Categories />
            <TopFeatured />
            <NewArrival />
            <BigDiscount />
            <Car />
            <MobilePhones />
            <BazarTwoImg />
            <OpticWatch />
            <AllCategories />
            <MoreForYou />
            <AdvancedFeature />
        </div>
    )
}
export default PageBody