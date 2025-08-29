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

  const [followers, setFollowers] = useState(data.followers);

  const handleFollow = () => {
    setFollowers(followers + 1);
  };

  return (
    <div className='w-150 h-auto text-center mx-auto my-15 text-3xl bg-gray-600 rounded-2xl text-white p-5 '>
      <div className='flex flex-row justify-evenly gap-4'>
        <img className='rounded-full' src={data.avatar_url} alt="Ritu Jha" width="200" height="200"/>
        <div>
          <h1 className='mb-4'>Name: {data.name}</h1>
          <h3 className='mb-4'>Github Followers: {followers}</h3>
          <h3 className='mb-4'>Github Following: {data.following}</h3>
          <h3 className='mb-4'>Public Repos: {data.public_repos}</h3>
        </div>
      </div>
      <div>
        <button className='btn bg-blue-900 px-4 py-2 rounded-2xl' onClick={handleFollow}>follow</button>
      </div>
    </div>
  )
}

export default github

export const githubInfoLoader = async() =>{
  const response = await fetch('https://api.github.com/users/ritujha19')
  return response.json() 
}