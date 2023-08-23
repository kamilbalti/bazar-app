import Heading from "./Heading"
import { AiOutlineSearch } from "react-icons/ai"

const SearchingDiv = () => {
    return(
        <div className="inputDiv secondNavToHideItems">
            <div className="searchIcon">
                <AiOutlineSearch />
            </div>
            <input placeholder="Searching for..." className="noBorder"/>
            <div className="catHead">
                <Heading linkName="All Categories" downClass="catDownBut"/>
            </div>
        </div>
    )
}
export default SearchingDiv