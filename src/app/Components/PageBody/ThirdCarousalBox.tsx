const ThirdCarousalBox = ({item} : any) => {
    return(
        <div className="fullWidth flashBox ThirdCarDiv">
            <img className="flashImg ThirdCarImg" src={item.ImgSrc} />
            <p className="ThirdCarPara">{item.name}</p>
            <p>
                <span className="newPrice">{item.newVal}</span>
                <span className="oldPrice">{item.delVal}</span>
            </p>
        </div>
    )   
}
export default ThirdCarousalBox