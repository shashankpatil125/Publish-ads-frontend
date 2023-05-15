import axios from 'axios';
import React, { useState } from 'react';
import Dropbox from './Dropbox';
import Navbar from '../../Components/Navbar';

function Adportal() {
    const [title, settitle] = useState('');
    const [link, setlink] = useState('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [imgstr, setimgstr] = useState<string | undefined>();
    const [showtitle, setshowtitle] = useState<string | undefined>();
    const [showlink, setshowlink] = useState<string | undefined>();
    const [selected, setSelected] = useState<string[]>([])


    const fileToBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            fileToBase64(file)
                .then((result) => {
                    setImageSrc(result);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const validateAndPost = ()=>{
        if(title==='' || link ==='' || imageSrc === null || selected.length===0){
            alert('Enter All Data')
        }
        else{
            post()
        }
    }

    const post = async () => {
        let data = {
            title: title,
            link: link,
            tags: selected,
            img: imageSrc,
        };
        axios
            .post('http://localhost:3000/postAd', data)
            .then((response) => {
                console.log(response.data);
                settitle('')
                setImageSrc(null)
                setlink('')
                setSelected([])
            })
            .catch((error) => {
                console.error(error);
            });

    };

    const getimg = async () => {
        axios
            .get('http://localhost:3000/postAd')
            .then((response) => {
                console.log(response);
                setimgstr(response.data.img);
                setshowlink(response.data.link);
                setshowtitle(response.data.title);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const setOptions = (e: string) => {
        var temp = selected.slice()
        setSelected([...selected, e])
    }


    return (
        <div className="App w-full h-screen bg-black">
            <Navbar />
            <div>
                <input
                    className='bg-orange-100 px-8 py-2 text-center text-xl rounded-md my-2 mt-20'
                    type="text"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    placeholder="Enter Title Of Ad"
                />
            </div>
            <div>
                <input
                    className='bg-orange-100 px-8 py-2 text-center text-xl rounded-md my-2'
                    type="text"
                    value={link}
                    onChange={(e) => setlink(e.target.value)}
                    placeholder="Enter Link Of Ad"
                />
            </div>
            <div >
                {/* <div  className='bg-orange-100 px-5 py-2 w-3/12 mx-auto'> */}
                {selected !== undefined ?
                    selected.map((e, i) => <span className='bg-green-600 rounded-md py-1 px-3 m-1' key={i}>{e}</span>) :
                    null
                }
                {/* </div> */}
                <Dropbox setselected={setOptions} />
            </div>
            <div>
                <div className="w-3/5 mx-auto mt-5">
                    {imageSrc && <img className='h-56 mx-auto' src={imageSrc} alt="Selected file" />}
                </div>
                <input className='text-white text-center mx-auto px-auto mt-5' type="file" onChange={handleInputChange} />
            </div>
            {imageSrc == null ? null : (
                <button className="bg-blue-600 w-1/12 my-5 py-2 rounded-md" onClick={validateAndPost}>Submit</button>
            )}
            {/* <button  onClick={getimg}>max</button> */}
            <p>{showtitle}</p>
            {imgstr == undefined ? null : (<a href={showlink}><img src={imgstr} /></a>)}
        </div>
    );
}

export default Adportal;
