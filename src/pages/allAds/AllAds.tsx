import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar';
import AdComponent from './AdComponent';
import TagsDropDown from './TagsDropDown';

type adDataType = {
    img:string,
    link:string,
    title:string
} 

function AllAds() {
    const [allad, setallad] = useState<adDataType[]>([]);
    const [tag,settag] = useState<string>()
    useEffect(() => {
        if(tag!==undefined){
            const getAllAds = async () => {
                await axios.get(`http://localhost:3000/getAdByTag/${tag}`)
                    .then((e) => setallad(e.data))
                    .catch((error) => console.log(error))
                    console.log(allad)
            }
            getAllAds()
        }
        else{
        const getAllAds = async () => {
            await axios.get("http://localhost:3000/postAd")
                .then((e) => setallad(e.data))
                .catch((error) => console.log(error))
                console.log(allad)
        }
        getAllAds()
    }
    },[tag])
    const setOptions = (e: string) => {
        settag(e)
    }

    return (
        <div className='bg-black h-full'>
            <Navbar />
            <TagsDropDown setselected={setOptions}/>
            <div className='grid grid-cols-4  '>
                {allad.map((e,i) => <AdComponent key={i} data = {e}/>)}
            </div>
            {/* <AdComponent data={e}/> */}
        </div>
    )
}

export default AllAds