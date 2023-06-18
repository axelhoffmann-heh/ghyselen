import React, {useState, useEffect} from 'react'
import agentimmo from '../../assets/agentimmo.png'
import couple from '../../assets/couple.png'

export default function Homebackground() {
    const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center text-white bg-hero-pattern bg-no-repeat bg-cover w-full h-[650px] bg-blend-multiply bg-gray-500'>
        <h1 className='text-7xl font-bold text-white p-6 mt-64'>Ghyselen</h1>
        <h2 className='text-2xl font-bold text-white p-6'>L'immobilier comme vous ne l'avez jamais vu</h2>
    </div>
  )
}
