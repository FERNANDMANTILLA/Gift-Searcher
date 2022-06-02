import React, { Fragment, useRef, useState } from 'react'
import { AddCategory } from './AddCategory'
import { GiftGrid } from './GiftGrid'

export const GiftExpertsApp = () => {

    const [category, setcategory] = useState([])
    return (
        <Fragment>
        <div  className='header' >
            <h1>Gif Searcher</h1>
            <img className='gif' src="https://c.tenor.com/5mz52kzlg6IAAAAi/bloodbros-search.gif" alt="" />
            </div>
            <hr />
            <AddCategory setcategory={setcategory} />
            <ol>
                {category.map((anime, idx) =>
                    <GiftGrid key={idx}  anime={anime} />
                )}
            </ol>
        </Fragment>
    )
}