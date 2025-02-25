'use client'
import { useState } from 'react'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import Sidebar from '@/components/Sidebar'
import Texto from '@/components/Texto'
import React from 'react'
import CardUser from '@/components/CardUser'

export default function Home() {
  const [people, setPeople] = useState([])
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  const handleAddUser = (name, email) => {
   setPeople([...people, {name, email}])
  }

  return (
    <main className='flex flex-col justify-between border border-white mx-40 p-10'>
      <div className="flex justify-between">
        <Logo/>
        <Menu/>
      </div>
      <div className="flex gap-4 items-center p-6 bg-neutral-800">
        <Sidebar/>
        <Texto title="About">
          {people.map((person, i) => <CardUser key={i} userName={person.name} userEmail={person.email}/>)}
          <input type="text" value={input1} onChange={(event) => {setInput1(event.target.value)}} className='px-7 py-2 rounded-lg bg-neutral-800' placeholder='Digite seu nome'/>
          <input type="text" value={input2} onChange={(event) => {setInput2(event.target.value)}} className='px-7 py-2 rounded-lg bg-neutral-800' placeholder='Digite seu email'/>
          <button className='px-7 py-2 bg-red-800' onClick={() => {handleAddUser(input1, input2)}}>Cadastrar</button>
        </Texto>
      </div>
      <Footer/>
    </main>
  )
}