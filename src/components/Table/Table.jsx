import React from 'react';
import { useState } from 'react';
import './Table.css';
function Table(props) {

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)):props.bodyData;
    console.log(initDataShow);
    const [dataShow, setDataShow] = useState(initDataShow);
    const [currPage, setCurrPage] = useState(0);
    let pages = 1;
    let range = [];
    console.log(typeof(props.bodyData));
    if(props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit));
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
        range = [...Array(pages).keys()]
    }
    const selectPage = page => {
        const start = Number(props.limit) * (page - 1);
        const end = start + Number(props.limit);
        setDataShow(props.bodyData.slice(start,end))
    }
  return (
    <div>
        <div className='table-wrapper'>
            <table>
                {
                    props.headData && props.renderHead ? (
                        <thead>
                            <tr>
                            {
                                props.headData.map((item, index) => props.renderHead(item,
                                index))
                            }
                            </tr>
                        </thead>
                    ): null
                }
                {
                    props.bodyData && props.renderBody ? (
                        <tbody>
                            {
                                dataShow.map((item, index) => props.renderBody(item,
                                    index))
                            }
                        </tbody>
                    ) : null
                }
            </table>
        </div>
        {
            pages > 1 ? (
                <div className='table__pagination'>
                    {
                        range.map((item, index) => (
                            <div key={index} className={`table__pagination-item ${currPage === index ? 
                            'active' : ''}`} onClick={() => selectPage(index)}>
                                {item + 1}
                            </div>
                        ))
                    }
                </div>                    
            ): null
        }
    </div>
    
  )
}

export default Table