import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'
function Posts({itm}) {

  return (
    <div className="w-[470px]  bg-white border border-[rgba(219,219,219)] rounded-lg  mb-3">
        <Header itm={itm}/>      
        <Section itm={itm}/>
        <Footer />
    </div>
  )
}

export default Posts