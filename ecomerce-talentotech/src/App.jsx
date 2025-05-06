import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Home from './components/Home'

function App() {
  return (
    <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productos' element={<ProductList/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
