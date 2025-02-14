import { Route, Routes } from 'react-router-dom'
import './App.css'
import Projects from './components/Projects'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop'



function App() {

  return (
   <div>
    <Header/>
    <ScrollToTop/>
    <Routes>
      <Route path='/'  element={<Home/>}></Route>
      <Route path='/projects'  element={<Projects/>}></Route>
      <Route path='/about'  element={<About/>}></Route>


    </Routes>
   
   </div>
  )
}

export default App
