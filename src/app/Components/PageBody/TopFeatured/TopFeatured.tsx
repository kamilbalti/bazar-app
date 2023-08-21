import TopRating from "./TopRating"
import FeaturedBrand from "./FeaturedBrand"
import "./TopFeatured.css"
import { GiBarbedStar } from "react-icons/gi"
import { PiMedalBold } from "react-icons/pi"
import Heading from "../Heading"

const TopFeatured = () => {
    return(
        <div className="FlashRowDiv TopFeaturedDiv">
            <div className="TopRatingMainDiv">
            <Heading icon={<PiMedalBold className="butIcon flashIcon TopIcon"/>} name="Top Ratings" 
            nameClass="flashHead" divClass="row TopFeaturedHead"
            />

                {/* <div className="row TopFeaturedHead">
                    <PiMedalBold className="butIcon flashIcon TopIcon"/>
                    <h1 className="flashHead">Top Ratings</h1>
                </div> */}
                <TopRating />
            </div>
            <div className="FeaturedBrandMainDiv">
            <Heading icon={<GiBarbedStar className="butIcon flashIcon TopIcon"/>} name="Featured Brands"
            nameClass="flashHead" divClass="row TopFeaturedHead"
            />

                {/* <div className="row TopFeaturedHead">
                    <GiBarbedStar className="butIcon flashIcon TopIcon"/>                    
                    <h1 className="flashHead">Featured Brands</h1>
                </div> */}
                <FeaturedBrand />
            </div>
        </div>
    )
}
export default TopFeatured