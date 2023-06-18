import React, {useState, useEffect} from 'react'
import agentimmo from '../../assets/agentimmo.png'
import couple from '../../assets/couple.png'

export default function Homebackground() {
    const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center text-white bg-hero-pattern bg-no-repeat bg-cover w-full h-[1152px] bg-blend-darken'>
        <h1 className='text-3xl font-bold text-black p-12 mt-64'>Seas + Axel</h1>
    </div>
  )
}
