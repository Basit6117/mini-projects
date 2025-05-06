// single selection
//Multi selection
import React, { use, useState } from 'react'
import data from './Data'
import './style.css'

function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setenableMultiSelection] = useState(false);
    const [multiple, setmultiple] = useState([]);
    function handleSingleSelection(id) {
        console.log(id)
        setSelected(id === selected ? null : id);
    }
    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId)
        if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
            else cpyMultiple.splice(findIndexOfCurrentId, 1);
        setmultiple(cpyMultiple);
        // console.log(selected, multiple)
    }
    return (
        <div className='wrapper'>
            <button onClick={() => setenableMultiSelection(!enableMultiSelection)}
            >Enable Multi Selection</button>
            <div className='accordian'>
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className='item'>
                            <div className='title'
                                onClick={
                                    setenableMultiSelection
                                        ? () => handleMultiSelection(dataItem.id)
                                        :() => handleSingleSelection(dataItem.id)}>
                                <h2  key={dataItem.id}>{dataItem.title}</h2>
                                <span>+</span>
                            </div>
                            
                              {  enableMultiSelection ?
                                  multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className='content'>
                                    <article >{dataItem.body}</article>
                                </div>
                                 ) :
                             selected === dataItem.id &&
                               ( <div className='content'>
                                    <article >{dataItem.body}</article>
                                </div>
                                )}
                                {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className='content'>
                                    <article>{dataItem.body}</article>
                                </div>
                                 )
                               ( <div className='content'>
                                    <article>{dataItem.body}</article>
                                </div>
                                )} */}


                        </div>)
                        : <div>No Data Found</div>
                }
            </div>

        </div>
    )
}

export default Accordian
