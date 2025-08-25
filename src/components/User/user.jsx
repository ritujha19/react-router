/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useParams } from 'react-router-dom'

const user = () => {
  const { userId } = useParams();
  return (
    <div className='text-center m-5 text-3xl font-semibold'> 
      User : {userId}
    </div>
  )
}

export default user
