/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react'

const github = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/ritujha19')
        .then((response) => response.json())
        .then((data) =>{ 
            console.log(data);
            setData(data)})  
    })

  return (
    <div className='w-170 text-center mx-auto my-25 text-3xl bg-gray-600 rounded-2xl text-white p-5'>
      Github Followers: {data.followers}
      <aside>
        <img className='rounded-full' src={data.avatar_url} alt="Ritu Jha" width="200" height="200"/>
      </aside>
        <p className='text-2xl'>Name: {data.name}</p>
    </div>
  )
}

export default github
