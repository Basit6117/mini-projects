// single selection
//Multi selection
import React, { use, useState } from 'react'
import data from './Data'
import './style.css'

function Accordian() {
    const [selected, setSelected] = useState(null)
    function handleSingleSelection(id) {
        // console.log(id)
        setSelected(id === selected ? null : id);
    }
    return (
        <div className='wrapper'>
            <div className='accordian'>
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className='item'>
                            <div className='title'
                                onClick={() => handleSingleSelection(dataItem.id)}>
                                <h2>{dataItem.title}</h2>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id ?
                                <div className='content'>
                                    <article>{dataItem.body}</article>
                                </div>
                                : null}


                        </div>)
                        : <div>No Data Found</div>
                }
            </div>

        </div>
    )
}

export default Accordian
