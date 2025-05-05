import CardTeam from './CardTeam.jsx';
import Gallery from './Gallery.jsx'
import MyButton from './myButton.jsx';
import CardProjects from './CardProjects.jsx';

function Main() {
    
    return (
        <main style={{width: '100%', height:'auto'}}>
            <h1>TITULO MAIN</h1>
            <p>Parrafo</p>
            <CardProjects title='PROPS' description='Using Props' buttonText='el boton del texto'/>
            <Gallery></Gallery>
            <MyButton onClick={() => {
                const confirmar = window.confirm(`Estas seguro de continuar?`)
                // confirm ? console.log('Usuario Acepto!') : console.log('Usuario Cancelo!')
                if (confirmar) {
                window.alert("Usuario aceptó");
                } else {
                window.alert("Usuario canceló");
                }
            }}/>
            <CardTeam/>
        </main>
    )
}
export default Main