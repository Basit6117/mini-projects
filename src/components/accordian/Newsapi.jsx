import { useState } from 'react'
import './style.css'
import axios from 'axios';
export default function Newsapi() {
    const [keyword, setKeyword] = useState("")
    const [results, setResults] = useState([])
    const [selected,  setSelected] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const term = keyword;
        const { data } = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_762600bff0b96198da55884539306fde5a45d&q=${term}`)
        setResults(
         data.results
        )
        // console.log('clicked')
    }
function handleSingSelection(getCurrentId){
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null  : getCurrentId );
}
    return (
        <div className='wrapper'>
            <div className='accordian'>
                <form onSubmit={handleSubmit} >

                    <label className="form-label fw-bold fs-1">Enter Country or City name for <span className='text-danger'>NEWS</span></label>
                    <input type='text'
                        name='keyword'
                        value={keyword}
                        className='form-control'
                        onChange={e => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
          
            {
                results.map(article  =>{
                    return<div className='item'>
                    <div onClick={() => handleSingSelection(article.article_id)} className='title'><h3>{article.title}</h3></div>
                    <span>+</span>
                  { 
                   selected === article.article_id ?
                   <p>{article.description}</p> : null
                  }
            </div>
          })
                }
            
        </div>
        </div>
           
    )
}