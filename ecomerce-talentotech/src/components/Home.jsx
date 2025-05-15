import '../style/Home.sass'
import SliderHome from "./SliderHome";
import Testimonios from "./Testimonios";

function Home() {
  return(
    <div className="home">
      <SliderHome/>
      <Testimonios/>
    </div>
  )
}

export default Home;
