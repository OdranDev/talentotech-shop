function Saludo({nombre, edad, ocupacion, imagen}){
    return(
        <div style={{
            padding:'1rem',
            margin: '1rem',
            border: '1px solid red',
            borderRadius: '12px',
        }}>
            <h2 style={{color:'blue'}}>Card</h2>
            <img
                src={imagen}
                alt={`Foto de ${nombre}`}
                style={{
                width: '300px',
                height: 'auto',
                borderRadius: '30%',
                marginBottom: '1rem',
                }}
            />
            <div  style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'flex-start'
            }}>
                <p>Name: <strong>{nombre}</strong></p>
                <p>Edad: <strong>{edad}</strong></p>
                <p>Ocupacion: <strong>{ocupacion}</strong></p>
            </div>
        </div>
    )
} export default Saludo