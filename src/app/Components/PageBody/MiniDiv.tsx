const MiniDiv = ({data, ind}: any) => {
    return(
        <>
        <div className="flashBox MiniDiv">
        {ind? 
                    <h2 className="MiniDivHead">
                        <span>Brands</span>
                        <span className="lightGrayCol">|</span>
                        <span>Shops</span>
                    </h2>
        : false} 
           {
            ind ? (data?.filter((item: any, index: number) => index < ind)?.map((item: any, index: number) => 
                <div className="FlashRowDiv MiniChildDiv">
                    <img className="MiniDivIcons" width={"30px"} src={item?.icon} />
                    <p>{item?.name}</p>
                </div>
            )) 
            :
            (data?.map((item: any, index: number) => 
                <div className="FlashRowDiv MiniChildDiv">
                    <img className="MiniDivIcons" width={"30px"} src={item?.icon} />
                    <p>{item?.name}</p>
                </div>
            ))} 
        {ind ? 
         (
             <div className={`FlashRowDiv MiniChildDiv2`}>
                 <p>View All Brands</p>
             </div>
         ) :
         (
         <div className={`FlashRowDiv MiniChildDiv MiniChildLastDiv`}>
             <p>View All Brands</p>
         </div>
        )}
        </div>
        </>
    )
}
export default MiniDiv