import { useEffect, useState } from "react"
import './styles.css'

function Load(){
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disabledBtn, setDisabledBtn] = useState(false);
    async  function fetchProducts(){
        setLoading(true);
        try{
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${
                count === 0 ? 0 : count * 20
            }`)
            const result  = await response.json();
            if(result && result.products && result.products.length){
                setProducts((prevData)=>[...prevData, ...result.products]);
                setLoading(false);
            }
            console.log(result);
            console.log(disabledBtn);

        }catch(e){
            console.log(e.error);

        }
    }
    useEffect(()=>{
        fetchProducts()
    },[count]);
    useEffect(()=>{
        (products && products.length === 100 ? setDisabledBtn(true) : setDisabledBtn(false))
        // if(products && products.length === 100 ){
        //      setDisabledBtn(true);}
    },[products]);

    if(loading){
        return <div>Loading. Please wait...</div>
    }
    return(
        <div className="container">
            <div className="product-container">
            {
                products && products.length ?
                products.map((item,index)=>{
                    return <div className="product" key={index}>
                        <img 
                        src={item.thumbnail} alt={item.title}/>
                        <div>
                        {
                            <p>{item.title}</p>
                        }
                        </div>
                        
                    </div>
                }) 
                : null
            }
            </div>
            <div className="button-container">
                <button disabled={disabledBtn} onClick={()=>{setCount(count + 1)}}>Load More Data</button>
                {
                (disabledBtn ?  <p>we have reached to the {products.length}</p> : null)
                   
                }
                
                
            </div>
        </div>
    )
}
export default Load;