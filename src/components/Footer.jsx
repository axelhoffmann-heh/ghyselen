import React from 'react'

export default function Footer() {
  return (
    <div className='h-60 bg-red-700 grid grid-cols-3'>
        <div>
            Test
        </div>
        <div className='flex flex-col'>
            <div>
                Test
            </div>
            <div>
                Test
            </div>
            <div>
                Test
            </div>
            <div>
                Test
            </div>
        </div>
        <div>
            Test
        </div>
        <div className='col-span-3 h-4'>
            <div className='w-full flex justify-center'>
                Tout droit reservé à Ghyselen. Site produit et mis en place par Pichon Séas et Hoffmann Axel.
            </div>
        </div>
    </div>
  )
}
