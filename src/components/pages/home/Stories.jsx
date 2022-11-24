import React from 'react'

function Storyes() {
  const AVATAR_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png";

  const stories = [
    {id: 1, 
      username: 'alparslan',
      avatar: AVATAR_URL
    },
    {id: 2, 
      username: 'alparslan',
      avatar: AVATAR_URL
    },
    {id: 3, 
      username: 'alparslan',
      avatar: AVATAR_URL
    },
    {id: 4, 
      username: 'alparslan',
      avatar: AVATAR_URL
    },
    {id: 5, 
      username: 'alparslan',
      avatar: AVATAR_URL
    },
    
    {id: 6, 
      username: 'alparslan',
      avatar: AVATAR_URL
    },
   
  ]
  return (
    <div className='border w-[470px] relative flex overflow-hidden px-2 items-center   gap-4  h-[119px] border-[rgba(219,219,219)] bg-white rounded-lg py-[16px]'>
      {
        stories?.map(story => (
          <div key={story?.id} className="cursor-pointer" >
            <div className='bg-gradient-to-b from-[#DE0046] to-[#F7A34B]  w-[60px] h-[60px] flex items-center justify-center rounded-full'>
              <img src={story?.avatar} className="bg-white border-[2px] border-white max-w-[56px] min-w-[56px] h-[56px] rounded-full  "/>
            </div>
            <div className="text-xs font-normal text-center">{story?.username}</div>
          </div>
        ))
      }  
    </div>
  )
}

export default Storyes