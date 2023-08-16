import { CgTwitter, CgFacebook } from "react-icons/cg"
import { AiOutlineInstagram, AiOutlineGoogle, AiOutlineYoutube } from "react-icons/ai"
const SecondFootCol = ({Obj, className}: any) => {
    return(
        <div className={className}>
            <h2 className="SecondFootHead">{Obj?.head}</h2>
            {Obj?.arr?.map((item: any, index: number) => 
                <p className="SecondFootPara">{item}</p>
            )}
        {Obj?.icon?
        <div className="FooterAllSocialIcons">
            <CgFacebook className="FooterSocialIcons"/>
            <CgTwitter className="FooterSocialIcons"/>
            <AiOutlineYoutube className="FooterSocialIcons"/>
            <AiOutlineGoogle className="FooterSocialIcons"/>
            <AiOutlineInstagram className="FooterSocialIcons"/>
        </div> 
        : false}
        </div>
    )
}
export default SecondFootCol