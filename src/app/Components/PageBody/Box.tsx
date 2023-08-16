import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
const Box = ({item, check}: any) => {
    return(
        <div className={ check ? `flashBox ${check}` : `flashBox`}>       
        <div className="flashRelative">
            <img src={item.ImgSrc} className="flashImg" />
            <p className="offPrice">{item?.off}</p>
        </div>
        <div className="row spaceBetween">
            <div className="boxData">
            <p className="boxDataChild">{item?.name}</p>
            <div className="boxDataChild starDiv starDiv2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            </div>
            <p className="boxDataChild"><span className="newPrice">{item?.newVal}</span>
            <span className="oldPrice">{item?.delVal}</span></p>
            </div>
            <div className="column">
                <span className="redCol">-</span>
                <span className="redCol">0</span>
                <span className="redCol">+</span>
            </div>
        </div>
        </div>
    )
}
export default Box