import React from 'react'
import { useActiveUser } from '../../../../context/userContext'
import { AudioCall, Details, VideoCall } from '../../../../Svg'

function Header() {
  const {activeUser} = useActiveUser()
      
  return (
    <header className="h-[60px] px-7  py-0 border-b flex items-center justify-between  border-border w-full">
        <div className='flex items-center gap-2'>
            <img width={24} src={activeUser?.avatar} />
            <h3 className='font-semibold text-base'>{activeUser?.username}</h3>
        </div>
        <nav className='flex items-center gap-3'>
            <button type="button"><AudioCall/></button>
            <button type="button"><VideoCall/> </button>
            <button type="button"><Details/></button>
        </nav>
    </header>
  )
}

export default Header