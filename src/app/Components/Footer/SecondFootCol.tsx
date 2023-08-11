import { BsGoogle, BsInstagram } from "react-icons/bs"
import { CgTwitter, CgFacebook, CgYoutube } from "react-icons/cg"
// import { AiOutlineInstagram, AiFillGoogleCircle } from "react-icons/ai"
const SecondFootCol = ({Obj}: any) => {
    return(
        <div>
            <h2>{Obj?.head}</h2>
            {Obj?.arr?.map((item: any, index: number) => 
            <div>
                <p>{item}</p>
            </div>
            )}
        {Obj?.icon?
        <div>
            <CgFacebook />
            <CgTwitter />
            <CgYoutube />
            <BsGoogle />
            <BsInstagram />
        </div> 
        : false}
        </div>
    )
}
export default SecondFootCol