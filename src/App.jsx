
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import ResumeGenerator from './pages/ResumeGenerator'
import UserForm from './pages/UserForm'
import History from './pages/History'
import Pnf from './pages/Pnf'
import Headear from './combonants/Headear'
import Footer from './combonants/Footer'

function App() {
  

  return (
    <>
    <Headear/>
     <Routes>
           <Route path='/' element={<LandingPage/>} />
           <Route path='/resume' element={<ResumeGenerator/>} />
           <Route path='/form' element={<UserForm/>} />
           <Route path='/history' element={<History/>} />
           <Route path='/*' element={<Pnf/>} />
     </Routes>
     <Footer/>
     
    </>
  )
}

export default App
