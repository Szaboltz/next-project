'use client'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import Sidebar from '@/components/Sidebar'
import Texto from '@/components/Texto'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [res, setRes] = useState(0)
  const [nome, setNome] = useState('')

  return (
    <main className='flex flex-col gap-3 justify-between border border-white mx-40 p-10'>
      <div className="flex justify-between">
        <Logo/>
        <Menu/>
      </div>
      <div className="flex gap-4 items-center p-6 bg-neutral-800">
        <Sidebar/>
        <Texto title={ nome }>
          <p>Seja bem-vindo {nome}!</p>
          <input type="text" value={ nome } onChange={(event) => {setNome(event.target.value)}} className='px-7 py-2 rounded-lg bg-neutral-800' placeholder='Digite seu nome'/>

          <input type="text" value={ count2 } onChange={(event) => {setCount2(event.target.value)}} className='px-7 py-2 rounded-lg bg-neutral-800' placeholder='Digite algo'/>
          <input type="text" value={ count3 } onChange={(event) => {setCount3(event.target.value)}} className='px-7 py-2 rounded-lg bg-neutral-800' placeholder='Digite algo'/>
          <p className='px-7 py-2 bg-neutral-800'>{ res }</p>
          <button className='px-7 py-2 bg-red-800'  onClick={() => setRes(Number(count2) + Number(count3))}>Somar</button>
          <p>Contador</p>
          <p className='px-7 py-2 bg-neutral-800'>{ count }</p>
          <button className='px-7 py-2 bg-red-800'  onClick={() => setCount(count + 1)}>Incrementar</button>
        </Texto>
      </div>
      <Footer/>
    </main>
  )
}