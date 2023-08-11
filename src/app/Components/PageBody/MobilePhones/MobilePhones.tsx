import { MobilePhoneData } from "@/app/data/MobilePhoneData"
import ThreeBox from "../ThreeBoxDiv"
import { MiniMobilePhoneData } from "@/app/data/MiniMobilePhoneData"

const MobilePhones = () => {
    return(
        <>
        <ThreeBox data={MobilePhoneData} miniData={MiniMobilePhoneData} head={"Mobile Phones"} ind={6}/>
        </>
    //     <div className="FlashRowDiv">
    //     <MiniDiv data={MiniCarsData}/>
    //     {
    //         CarsData.map((item: any, index: any) => 
    //             <Box item={item}/>
    //         )
    //     }
    // </div>
    )
}
export default MobilePhones