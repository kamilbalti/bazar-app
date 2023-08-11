import { TopFeaturedData } from "@/app/data/TopFeaturedData"
import { AiFillStar } from "react-icons/ai"

const TopRating = () => {
    return(
        <div className="row TopRatingDiv">
            {TopFeaturedData?.filter((item: any, index: any) => index < 4 )?.map((item: any, index: any) => 
                <div className="TopBox">
                    <img className="flashImg" src={item.ImgSrc}/>
                    <div className="starDiv row TopRatingStars">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <span className="zeroQuantity">(0)</span>
                    </div>
                    <p className="TopItemName">{item.name}</p>
                    <p className="newPrice2">{item.price}</p>
                </div>
            )}
        </div>
    )
}
export default TopRating