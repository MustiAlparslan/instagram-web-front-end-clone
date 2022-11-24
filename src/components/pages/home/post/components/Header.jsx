import React from 'react'
import {NavLink} from "react-router-dom"
import {Options} from "../../../../../Svg"

function Header({itm}) {

  return (
    <header className="h-14 flex justify-between items-center px-3">
        <div className='flex gap-3 items-center'>
          <div className='flex items-center'><img src={itm?.avatar} width={32} height={32} className="rounded-full"/></div>
          <div>
            <NavLink to={`/${itm?.username}/`} className="text-sm">{itm?.username}</NavLink>
          </div>
        </div>
        <div>
          <Options/>
        </div>
      </header>
  )
}

export default Header