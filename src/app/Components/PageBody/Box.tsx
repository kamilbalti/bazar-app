import { AiFillStar } from "react-icons/ai"
const Box = ({item}: any) => {
    return(
        <div className="flashBox">       
        <div className="flashRelative">
            <img className="flashImg" src={item?.ImgSrc} />
            <p className="offPrice">{item?.off}</p>
        </div>
            <div className="boxData">
            <p className="boxDataChild">{item?.name}</p>
            <div className="boxDataChild starDiv">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            {/* <img src={AiFillStar} />
            <img src={AiFillStar} />
            <img src={AiFillStar} />
            <img src={AiFillStar} />
            <img src={AiFillStar} /> */}
            </div>
            <p className="boxDataChild"><span className="newPrice">{item?.newVal}</span>
            <span className="oldPrice">{item?.delVal}</span></p>
            </div>
        </div>
    )
}
export default Box