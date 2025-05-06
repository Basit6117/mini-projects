import { useEffect, useState } from "react"
import { BsArrowUpLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css'

export default function Carasoul({url,limit = 5, page = 1}){
const [images, setImages] = useState([]);
const [currentImage, setCurrentImage] = useState(0);
const [errorMsg, setErrorMsg] = useState(null);
const [loading, setLoading] = useState(false);
function handlePrevious(){
setCurrentImage(currentImage === 0 ? images.length - 1: currentImage - 1);
}
function handleNext(){
setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
}
async function fetchImages(url){
try {
    setLoading(true);
    const response = await fetch(`${url}?page=${page}&limit=${limit}`);
    const data = await response.json();
    if(data){
        setImages(data)
        setLoading(false);
    }
} catch (e) {
    setErrorMsg(e.message);
    setLoading(false);

}
}


useEffect(()=>{
    if(url != '') fetchImages(url)
},[url]);
console.log(images[0]);
if(loading){
    return <div>Loading...</div>
}
if(errorMsg !== null){
    return <div>Error occured ! {errorMsg}</div>
}
    return(
        <div className="container">
<BsArrowUpLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
{
    images && images.length ?
    images.map((imageItem, index) =>(
        <img
        key={imageItem.id}
        alt = {imageItem.download_url}
        src = {imageItem.download_url}

        className= {currentImage === index ? "current-image" :"hide-current-image" }
        />
    ))

    : <p>No images</p>
}
<BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
<span className="circle-indicator">
    {
        images && images.length ?
        images.map((_,index)=>(
            <button
            key={index}
            onClick={()=> setCurrentImage(index)}
            className={currentImage === index ? "current-indicator" : "current-indicator inactive-indicator"}>
                
            </button>
        ))
        : null
    }
</span>
        </div>
    )
}