import { AdvancedFeatureData } from "@/app/data/AdvancedFeatureData"
import "./AdvancedFeature.css"
const AdvancedFeature = () => {
    return(
        <div className="FlashRowDiv wrap MoreForBoxDiv AdvancedFeatureMainDiv">
            {AdvancedFeatureData?.map((item: any, index: number) =>
                <div className="flashBox flashBox3  AdvancedFeatureDiv">
                {
                // item.icon?
                // <img className="AdvancedFeatureImg" width={"50px"} src={item.icon}/>:
                item.img
                }
                <h4 className="AdvancedFeatureHead">{item.heading}</h4>
                <p className="AdvancedFeaturePara">{item.Intro}</p>
                </div>
            )}
        </div>
    )
}
export default AdvancedFeature