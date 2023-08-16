import { MobilePhoneData } from "@/app/data/MobilePhoneData"
import ThreeBox from "../ThreeBoxDiv"
import { MiniMobilePhoneData } from "@/app/data/MiniMobilePhoneData"

const MobilePhones = () => {
    return(
        <>
        <ThreeBox data={MobilePhoneData} miniData={MiniMobilePhoneData} head={"Mobile Phones"} ind={6}/>
        </>
    )
}
export default MobilePhones