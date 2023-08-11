import { AdvancedFeatureData } from "@/app/data/AdvancedFeatureData"
const AdvancedFeature = () => {
    return(
        <div className="FlashRowDiv">
            {AdvancedFeatureData?.map((item: any, index: number) =>
                <div>
                {
                item.icon?
                <img width={"50px"} src={item.icon}/>:
                item.img
                }
                <h2>{item.heading}</h2>
                <p>{item.Intro}</p>
                </div>
            )}
        </div>
    )
}
export default AdvancedFeature