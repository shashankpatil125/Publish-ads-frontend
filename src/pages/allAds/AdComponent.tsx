import React from 'react'

type adDataType = {
    img:string,
    link:string,
    title:string
} 

function AdComponent(props:{data:adDataType}) {
  return (
    <div className='text-black bg-orange-200 w-11/12 m-3 rounded-2xl'>
        <p className='mx-auto  text-center my-3 text-2xl'>{props.data.title}</p>
        <img className='w-8/12 mx-auto' src={props.data.img}></img>
        <div className='mx-auto w-fit mt-3 bg-green-700 mb-3 px-8 py-2 rounded-xl'>
        <a href={props.data.link} className='mx-auto  text-center my-3 text-xl pb-3'>Link</a>
        </div>
    </div>
  )
}

export default AdComponent