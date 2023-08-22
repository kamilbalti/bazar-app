import { TopFeaturedData } from "@/app/data/TopFeaturedData"
import AllStar from "../AllStar"

const TopRating = () => {
    return(
        <div className="row TopRatingDiv">
            {TopFeaturedData?.filter((item: any, index: any) => index < 4 )?.map((item: any, index: any) => 
                <div className="TopBox">
                    <img className="flashImg" src={item.ImgSrc}/>
                    <AllStar className="starDiv row TopRatingStars" num={true}/>
                    <p className="TopItemName">{item.name}</p>
                    <p className="newPrice2">{item.price}</p>
                </div>
            )}
        </div>
    )
}
export default TopRating