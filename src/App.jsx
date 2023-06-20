import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './pages/Home/HomePage';
import Error from './pages/Error';
import Login from './pages/Admin/Login';
import HomeMobilierPage from './pages/Admin/ModMobilier/HomeMobilierPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/admin'>
          <Route index element={<Login/>}/>
          <Route path='login' element={<Login/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path='home' element={<HomeMobilierPage/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
