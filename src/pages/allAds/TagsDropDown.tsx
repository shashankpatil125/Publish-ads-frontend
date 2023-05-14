import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Dropbox(props:{setselected:(e:string)=>void}) {
    const tags = ["Food", "Technology", "Automobiles", "Entertainment", "Tourism", "Game", "Finance", "Fashion"]
    return (
        <Dropdown className='mt-4 w-2/12 mx-auto' options={tags} value={tags[0]} placeholder="Select an option" onChange={(e)=>props.setselected(e.value)} />
    )
}

export default Dropbox