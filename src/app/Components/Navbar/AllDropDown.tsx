import { useState, useEffect } from "react"
import { NavAllData } from "@/app/data/NavData/NavAllData"
import Heading from "./Heading"
import DropDown from "./DropDown"
import { useSelector } from "react-redux"

const AllDropDown = () => {
    const [ select, setSelect ]: any = useState(10)
    const [name, setName] = useState("");
    const [num, setNum] = useState(0)
    const cartOpen: any = useSelector((e: any) => e.cartOpen)
    const showDetail = (index: any) => {
        if(!cartOpen)
        num % 2 == 1?
        setName('AllOptionDiv hideOption'):
        setName('AllOptionDiv')
        setNum(num+1)
        if(select !== false || select == 0)
        setSelect(index)
    }
    useEffect(() => {
        setName('AllOptionDiv hideOption');
    },[])
    useEffect(() => {
        if(cartOpen)
        setSelect(10)
        setName('AllOptionDiv hideOption')
    },[cartOpen])

    return(
        <div className="row AllDropDownDiv">
                {NavAllData.map((item: any, index: number) => 
                    <div>

                    <div className="linkPara" onClick={() => showDetail(index)}  onDoubleClick={() => showDetail(10)} onMouseOver={() => showDetail(index)}>
                        <Heading linkName={item.name} downClass="allNavDownIcon"/>
                    </div>
                    { select == index ? <DropDown num={num} setNum={setNum} mega={index == 1? true: false} 
                    secondChildClass={ index == 1 ? 'megaMenuDiv' : false} 
                    childDivClass={index == 2 ? "FullScreenChild" :
                    (index !== 1 ? "NavHomeDiv": "hideDropExtra")} 
                    childDivChildClass={index == 2 ? "FullScreenChildDiv NavHomeChildDiv" : 
                    'NavHomeChildDiv'} indexProp={index} data={NavAllData[index].arr} 
                    name={`dropAbsDiv ${item.name}`} /> : false}
                    </div>
                    
                )}
        </div>
    )   
}
export default AllDropDown