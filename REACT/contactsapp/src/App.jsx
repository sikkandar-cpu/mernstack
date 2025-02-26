import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<about/>}/>
                    <Route path='/contact' elememt={<contact/>}/>
                </Routes>
            </BrowserRouter>
            <h1>sikku</h1>
            <Home />
        </div>
    )
}
export default App
