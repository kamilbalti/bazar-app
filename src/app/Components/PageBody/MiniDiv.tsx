const MiniDiv = ({data, ind}: any) => {
    return(
        <div className="flashBox">
        {ind? 
                    <h2>
                        <span>Brands</span>
                        <span>|</span>
                        <span>Shops</span>
                    </h2>
        : false} 
           {
            ind ? data?.filter((item: any, index: number) => index < ind)?.map((item: any, index: number) => 
                <div className="FlashRowDiv">
                    <img width={"40px"} src={item?.icon} />
                    <p>{item?.name}</p>
                </div>
            )
            :
            data?.map((item: any, index: number) => 
                <div className="FlashRowDiv">
                    <img width={"40px"} src={item?.icon} />
                    <p>{item?.name}</p>
                </div>
            )
           } 
        </div>
    )
}
export default MiniDiv