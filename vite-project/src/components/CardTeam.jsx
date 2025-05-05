function CardTeam(){
    const team = [
        { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://randomuser.me/api/portraits/women/44.jpg' },
        { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://randomuser.me/api/portraits/men/43.jpg' },
        { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://randomuser.me/api/portraits/men/42.jpg' },
        { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://randomuser.me/api/portraits/women/45.jpg' },
      ];
    return(
        <section style={{display:'flex',}}>
            {team.map((person, index)=>
                <div 
                key={index} 
                style={{
                    margin:'1rem', 
                    padding:'1rem', 
                    border:'1px solid blue',
                    borderRadius:'9px'
                    }}>
                    <img key='img' src={person.imagen} alt={`${person.nombre} is ${person.rol}`}/>
                    <p key='nombre'>{person.nombre}</p>
                    <p key='rol'>{person.rol}</p>
                </div>
            )}
        </section>
    )
}
export default CardTeam