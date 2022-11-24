import React, { useState } from 'react'
import { AddPhotoOrVideo, Emoji, Like } from "../../../../Svg";

function Footer() {
  const [msg,setMsg] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
   
  }

  return (
    <footer className="h-[84px]  p-5 flex mt-auto items-center ">
    <form onSubmit={handleSubmit} className="border h-11 w-full flex justify-between items-center pl-[11px] pr-2 rounded-[22px] ">
      <Emoji />
      <input value={msg} onChange={e => setMsg(e.target.value)} type="text" placeholder="Message" className='outline-none w-full mx-2 ' />
     {
      !msg ? 
      (
        <div className='flex items-center gap-3'>
          <AddPhotoOrVideo />
          <Like />
        </div>
      ):
      (
        <button type="submit" className='text-primary_button text-sm font-semibold pr-2'>Submit</button>
      )
    }
    </form>
  </footer>  )
}

export default Footer