import { AiFillCaretRight } from "react-icons/ai"
const Heading = ({icon, name, nameClass, divClass, viewHead}: any) => {
    return(
        <div className={divClass}>
        <div className="row">

        {icon}
        <h2 className={nameClass}>{name}</h2>
        </div>
        <div className={`row ${viewHead}`}>
        <p className="viewHead">View all</p>
        <AiFillCaretRight className="rightIcon"/>
        </div>
        </div>
    )
}
export default Heading