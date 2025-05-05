import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProductList from './components/productList'
import Cart from './components/Cart'

function App() {
  return (

    <div className='App'>
      <NavBar />
      <header className='App-Header'><h1>Mi E-comerce</h1></header>
      <main className='ElMain'>
        <div className='hero-section'>
          <h1>Welcome to TalentoTech Shop</h1>
          <p>Find the better tech products here.</p>
        </div>
        <ProductList/>
        <Cart />
      </main>
      <Footer/>
    </div>
  )

}

export default App
