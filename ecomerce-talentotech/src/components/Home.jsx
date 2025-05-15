import '../style/Home.sass'
import SliderHome from "./SliderHome";
import Testimonios from "./Testimonios";

function Home() {
  return(
    <div className="home">
      <h1 className="home-title">Bienvenido a la tienda</h1>
      <SliderHome/>
      <Testimonios/>
    </div>
  )
}

export default Home;
