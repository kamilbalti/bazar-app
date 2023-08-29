import { TopFeaturedData } from "@/app/data/TopFeaturedData"

const FeaturedBrand = () => {
    return(
        <div className="row featuredDiv">
            {TopFeaturedData?.filter((item: any ,index: number) => index > 3)?.map((item: any , index: number) => 
                <div className="featuredChildDiv">
                    <img className="flashImg" src={item.ImgSrc} />
                    <p className="featuredPara">{item.name}</p>
                </div>
            )}
        </div>
    )
}
export default FeaturedBrand