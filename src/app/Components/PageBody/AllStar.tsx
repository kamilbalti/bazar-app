import { AiFillStar } from "react-icons/ai"

const AllStar = ({className, num}: any) => {
    return(
        <div className={className}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            {num ? <span className="zeroQuantity">(0)</span> : false}
        </div>
    )
}
export default AllStar