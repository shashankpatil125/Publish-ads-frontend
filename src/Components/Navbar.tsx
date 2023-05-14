import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' w-full h-20 bg-white px-auto'>
        <div className='flex h-full px-12'>
            <Link to='/' className='font-bold my-auto text-2xl px-8'>Create Ad</Link>
            <Link to='/allads' className='font-bold my-auto text-2xl px-8'>All Ads</Link>
            <p className='font-bold my-auto text-2xl px-8'>Guide</p>
            <Link to='/test' className='font-bold my-auto text-2xl px-8'>Test</Link>            
        </div>
    </div>
  )
}

export default Navbar