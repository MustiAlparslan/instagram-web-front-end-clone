import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate()

    const handleLogOut = async () => {
    }

  return (
    <button onClick={handleLogOut} type='button' className='rounded-b-[4px] py-[8px] px-[16px]    text-left bg-white'>Log out</button>
  )
}

export default Logout