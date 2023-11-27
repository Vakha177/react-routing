import React from 'react'
import { Routes,  Route, Link } from 'react-router-dom';
import "./App.css";
import  Homepage  from './pages/Homepages'
import   Featurespage   from './pages/Featurespages';
import  Contactpage   from './pages/Contactpages';
const App = () => {
  return (
    <>
  <div className='header'>
    <div className='cover'><h1>Cover</h1></div>
       <div className='Link'>
         <Link to="/">Home</Link>
         <Link to = "/features">Features</Link>
         <Link to = "/contacts">Contacts</Link>
     </div>
  </div>
  <Routes>
    <Route path = '/' element= {<Homepage/>} ></Route>
    <Route path = '/features' element={<Featurespage/>}></Route>
    <Route path='/contacts' element={<Contactpage/>}/>
  </Routes>
  </>
  )
}

export default App