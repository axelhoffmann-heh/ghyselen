
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className='w-screen h-screen bg-slate-900'>
      <Navbar/>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-white p-12'>Seas + Axel</h1>
        <Card/>
      </div>
    </div>
  )
}

export default App
