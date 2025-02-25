import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import Sidebar from '@/components/Sidebar'
import Texto from '@/components/Texto'
import React from 'react'
import CardUser from '@/components/CardUser'

export default function Home() {
  return (
    <main className='flex flex-col justify-between border border-white mx-40 p-10'>
      <div className="flex justify-between">
        <Logo/>
        <Menu/>
      </div>
      <div className="flex gap-4 items-center p-6 bg-neutral-800">
        <Sidebar/>
        <Texto title="About">
          <CardUser userName="Szabo Henrique" userEmail="szaboprofissional@gmail.com" userImage="https://github.com/Szaboltz.png"/>
          <CardUser userName="Emanuel Cardoso" userEmail="emanuel@gmail.com" userImage="https://github.com/EmanuelCAC.png"/>
        </Texto>
      </div>
      <Footer/>
    </main>
  )
}