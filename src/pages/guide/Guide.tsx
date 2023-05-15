import React from 'react'
import Navbar from '../../Components/Navbar'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'


export const Guide = () => {
  return (
    <div className='bg-orange-200 h-full px-auto'>
        <Navbar/>
        <div className='mx-auto w-7/12'>
            <p className='text-3xl mt-5 font-bold text-center'>Api Guide</p>
            <p className='text-xl font-bold my-5'>Axios Setup</p>
            <p>Axios is a popular JavaScript library used to make HTTP requests from the browser or Node.js. To set up Axios, first install it via NPM or Yarn. Then, import it into your project and use the axios.create() method to create an instance with custom default settings. You can then use this instance to make requests to your API or other endpoints. Remember to handle responses and errors appropriately.</p>
            <p className='my-3 font-bold'>Using Npm: </p>
            <p className='bg-black text-white px-10 py-2 rounded-lg'>npm install axios</p>
            <p className='my-3 font-bold'>Using Yarn: </p>
            <p className='bg-black text-white px-10 py-2 rounded-lg'>yarn add axios</p>
            <p className='text-xl font-bold my-10'>Api call to get all ads </p>
            <img className='mx-auto' src={img1}></img>
            <p className=' py-5'>This code defines a React functional component that uses the "useState" and "useEffect" hooks. The component initializes two state variables: "allad", which is an array of objects of type "adDataType", and "tag", which is a string. The "useEffect" hook is used to fetch data from a REST API endpoint when the "tag" state changes. If "tag" is not "undefined", the component makes an HTTP GET request to "http://localhost:3000/getAdByTag/:tag" using Axios. The API endpoint returns a JSON array of objects, which is set as the value of "allad" state using the "setallad" function. If "tag" is "undefined", the component makes a GET request to "http://localhost:3000/postAd" instead, and sets the returned data as the value of "allad" state. In both cases, the statement is used to log the updated state value to the console. The "useEffect" hook has "tag" as a dependency, which ensures that the effect runs whenever "tag" changes.</p>
            <p className='text-xl font-bold my-10'>Get one ad by tag :- that we can call api to anywhere  </p>
            <img className='mx-auto' src={img2}></img>
            <p className='py-5'>This code defines an asynchronous function called getad that uses the Axios library to make a GET request to a REST API endpoint. The URL for the GET request is constructed dynamically using the tag variable. When the request is successful, the data returned by the API is passed as an argument to a function that sets the value of a state variable called code. If the request fails, an error message is logged to the console.After the GET request has been sent, the function logs the current value of the code state variable to the console using console.log().</p>
            <p className='text-xl font-bold my-10'>Get one ad without using any kind of tag :- that we can call api to anywhere  </p>
            <img className='mx-auto' src={img3}></img>
            <p className='py-5 text-center'>This code is for get a Random ad from the Database to display it at any Frontend. api url is http://localhost:3000/getOneAd it sends the random ad from the database as a responce</p>

            </div>
    </div>
  )
}
