import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Home from "./components/Home";
import DetalleProducto from "./components/DetalleProducto";
import RutaProtegida from "./components/RutaProtegida";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";
// import ProductosPorCategoria from './components/ProductosPorCategoria'

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<RutaProtegida><Cart /></RutaProtegida>} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
          {/* <Route path="/categorias/:categoria" element={<ProductosPorCategoria />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
