const SecondCarousalBox = ({item}: any) => {
    return(
        <div className="catBox">       
            <p className="absName">{item?.name}</p>
            <p className="absOrder">{item?.about}</p>
            <img className="catImg" src={item?.ImgSrc}/>
        </div>

    )
}
export default SecondCarousalBox