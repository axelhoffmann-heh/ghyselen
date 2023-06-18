
import GridContent from './components/Home/GridContent'
import Homebackground from './components/Home/Homebackground'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className='h-screen'>
      <Navbar/>
      <div className='flex flex-col items-center'>
        <Homebackground/>
      </div>
      <div>
        <GridContent/>
      </div>
    </div>
  )
}

export default App
