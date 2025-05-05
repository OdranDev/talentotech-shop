import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer></Footer>
{/*     
    <div style={{display:'flex',}}>
      <Saludo
        nombre="Lucía"
        edad={30}
        ocupacion="Ingeniera de software"
        imagen="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Saludo
        nombre="Marcos"
        edad={27}
        ocupacion="Diseñador gráfico"
        imagen="https://randomuser.me/api/portraits/men/32.jpg"
      />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          count is {count}
        </p>
        <button onClick={() => setCount((count) => count + 1)}>sum</button>
        <button onClick={() => setCount((count) => count > 0 ? count - 1 : count)}>minus</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <MyButton onClick={() => {
        const confirmar = window.confirm(`Estas seguro de continuar?`)
        // confirm ? console.log('Usuario Acepto!') : console.log('Usuario Cancelo!')
        if (confirmar) {
          window.alert("Usuario aceptó");
        } else {
          window.alert("Usuario canceló");
        }
      }}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyButton onClick={()=> window.alert("¡Cuidado! Esta es una advertencia.")}/>
       */}
    </>
  )
}

export default App
