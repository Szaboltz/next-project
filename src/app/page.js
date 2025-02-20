import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import Sidebar from '@/components/Sidebar'
import Texto from '@/components/Texto'
import React from 'react'

export default function Home() {
  return (
    <main className='flex flex-col gap-20 justify-between h-screen border border-white mx-40 p-10'>
      <div className="flex justify-between">
        <Logo/>
        <Menu/>
      </div>
      <div className="flex justify-between items-center p-6 border border-white">
        <Sidebar/>
        <Texto/>
      </div>
      <Footer/>
    </main>
  )
}