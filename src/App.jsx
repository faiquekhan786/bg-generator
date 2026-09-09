import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const[color, setColor] = useState("white")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='Fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 py-4'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl text-black '>

          <button onClick={()=> setColor("red")} className=' px-4 py-1 rounded-2xl shadow-lg text-white font-bold' style={{backgroundColor: 'red'}} >RED</button>

          <button onClick={()=> setColor("green")} className=' px-4 py-1 rounded-2xl shadow-lg text-white font-bold' style={{backgroundColor: 'green'}} >GREEN</button>

          <button onClick={()=> setColor("black")} className=' px-4 py-1 rounded-2xl shadow-lg text-white font-bold' style={{backgroundColor: 'black'}} >BLACK</button>

          <button onClick={()=> setColor("pink")} className=' px-4 py-1 rounded-2xl shadow-lg text-white font-bold' style={{backgroundColor: 'pink'}} >PINK</button>

          <button onClick={()=> setColor("purple")} className=' px-4 py-1 rounded-2xl shadow-lg text-white font-bold' style={{backgroundColor: 'purple'}} >PURPLE</button>

          <button onClick={()=> setColor("orange")} className=' px-4 py-1 rounded-2xl shadow-lg text-white font-bold' style={{backgroundColor: 'orange'}} >ORANGE</button>

        </div>
      </div>
    </div>
  )
}

export default App
