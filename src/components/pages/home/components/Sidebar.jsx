import React from 'react'
import { useActiveUser } from '../../../../context/userContext'

function Sidebar() {
    const {activeUser} = useActiveUser()
  return (
    <div className='hidden specialTwo:block w-[319px]  mt-14 '>
        <header className="flex justify-between items-center">
            <div className="flex gap-4">
                <div>
                    <img src={activeUser?.avatar} className="w-[56px] h-[56px] rounded-full"/>
                </div>
                <div className='flex flex-col justify-center '>
                    <h3 className='text-sm'>{activeUser?.username}</h3>
                    <h4 className="text-[#8e8e8e] text-sm">{activeUser?.fullName}</h4>
                </div>
            </div>
            <div><a  className='text-right text-xs text-primary font-semibold'>Switch</a></div>
        </header>
        <div className="flex justify-between my-3">
            <p className="text-[#8e8e8e] font-semibold text-sm">Suggestions For You</p>
            <a className='text-xs text-[#262626] font-semibold'>See All</a>
        </div>
        <ul>
            <li className="w-full flex justify-between items-center mb-3">
                <div className="flex gap-4">
                    <div className='flex items-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png" width={32}/>
                    </div>
                    <div className='flex flex-col justify-center '>
                        <h3 className='text-sm font-semibold'>mustyalparslan</h3>
                        <h4 className='text-xs text-[#8e8e8e]'>New to Instagram</h4>
                    </div>
                </div>
                <div><a  className='text-right text-xs text-primary font-semibold'>Follow</a></div>    
            </li>    
            <li className="w-full flex justify-between items-center mb-3">
                <div className="flex gap-4">
                    <div className='flex items-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png" width={32}/>
                    </div>
                    <div className='flex flex-col justify-center '>
                        <h3 className='text-sm font-semibold'>mustyalparslan</h3>
                        <h4 className='text-xs text-[#8e8e8e]'>New to Instagram</h4>
                    </div>
                </div>
                <div><a  className='text-right text-xs text-primary font-semibold'>Follow</a></div>    
            </li>  
            <li className="w-full flex justify-between items-center mb-3">
                <div className="flex gap-4">
                    <div className='flex items-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png" width={32}/>
                    </div>
                    <div className='flex flex-col justify-center '>
                        <h3 className='text-sm font-semibold'>mustyalparslan</h3>
                        <h4 className='text-xs text-[#8e8e8e]'>New to Instagram</h4>
                    </div>
                </div>
                <div><a  className='text-right text-xs text-primary font-semibold'>Follow</a></div>    
            </li>          
        </ul>
    </div>
  )
}

export default Sidebar