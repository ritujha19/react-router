/* eslint-disable */
import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const github = () => {
  const data = useLoaderData();
    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ritujha19')
    //     .then((response) => response.json())
    //     .then((data) =>{ 
    //         console.log(data);
    //         setData(data)})  
    // })

  return (
    <div className='w-150 h-60 text-center mx-auto my-15 text-3xl bg-gray-600 rounded-2xl text-white p-5 flex flex-row justify-evenly'>
      <img className='rounded-full' src={data.avatar_url} alt="Ritu Jha" width="200" height="200"/>
        <div>
          <h1 className='mb-4'>Name: {data.name}</h1>
          <h3 className='mb-4'>Github Followers: {data.followers}</h3>
          <h3 className='mb-4'>Github Following: {data.following}</h3>
          <h3 className='mb-4'>Public Repos: {data.public_repos}</h3>
        </div>
    </div>
  )
}

export default github

export const githubInfoLoader = async() =>{
  const response = await fetch('https://api.github.com/users/ritujha19')
  return response.json() 
}