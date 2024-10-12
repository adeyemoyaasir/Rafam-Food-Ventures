import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
