
import { Route, Routes } from 'react-router-dom'
import './App.css'
import GetStart from './Pages/GetStart/GetStart'
import Home from './Pages/Home/Home'
import Canva from './Pages/DesignCanva/Canva'

function App() {


  return (
    
    <Routes>
       <Route path="/" element={<GetStart />}/>
       <Route path="/Home" element={<Home />}/>
       <Route path="/canva" element={<Canva />}/>
    </Routes>
    
  )
}

export default App
