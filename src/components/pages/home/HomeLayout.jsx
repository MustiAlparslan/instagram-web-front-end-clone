import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'



function HomeLayout() {
 

  const styles = {
    header: "flex w-full h-[60px] bg-white border-border border border-bottom justify-around items-center",
    nav: "flex gap-[24px]"
}
  return (
    <div className='w-full h-screen flex flex-col '>
        <Header/>
    <section className='flex-1 overflow-auto'>
        <Outlet/>
    </section>
  </div>
  )
}

export default HomeLayout