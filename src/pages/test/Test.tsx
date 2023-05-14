import React, { useState } from 'react'
import Editor from "@monaco-editor/react";
import Navbar from '../../Components/Navbar';
import axios from 'axios';
import TagsDropDown from '../allAds/TagsDropDown';
import { Link } from 'react-router-dom';

type adDataType = {
    img:string,
    link:string,
    tags:string[]
    title:string,
} 

export const Test = () => {
    const [code, setCode] = useState<adDataType>();
    const [tag, settag] = useState("");
    const setOptions = (e: string) => {
        settag(e)
    }
    const getad = async() => {
        await axios.get(`http://localhost:3000/getOneByTag/${tag}`)
            .then((e) =>
                setCode(e.data)
            )
            .catch((err) => console.log(err))
            
        console.log(code);
            
    }



    return (
        <div className='w-full bg-black h-screen'>
            <Navbar />
            <div className='flex mt-5'>
            <TagsDropDown setselected={setOptions} />
            <button className='bg-green-600 px-10 mr-96  rounded-lg' onClick={getad}>Refresh</button>
            </div>
            <p className='text-center text-white'>{code?.title}</p>
            <div className=' mx-auto'>
                {code?.link!==undefined?<Link to={code?.link}>
                <img className='mx-auto w-2/12 h-3/6' src={code?.img} alt="" />
                </Link>:null}
            </div>
        </div>
    )
}
