import { TopFeaturedData } from "@/app/data/TopFeaturedData"

const FeaturedBrand = () => {
    return(
        <div className="row featuredDiv">
            {TopFeaturedData?.filter((item: any ,index: any) => index > 3)?.map((item: any , index: any) => 
                <div className="featuredChildDiv">
                    <img className="flashImg" src={item.ImgSrc} />
                    <p className="featuredPara">{item.name}</p>
                </div>
            )}
        </div>
    )
}
export default FeaturedBrand