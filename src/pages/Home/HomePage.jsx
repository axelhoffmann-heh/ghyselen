import React from 'react'
import Homebackground from '../../components/Home/Homebackground'
import GridContent from '../../components/Home/GridContent'
import Layout from '../../components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <Homebackground/>
      </div>
      <div>
        <GridContent/>
      </div>
    </Layout>
  )
}
