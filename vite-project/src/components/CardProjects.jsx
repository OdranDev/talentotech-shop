import { useState } from "react"

const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js', 'Tailwind','Others'];
const coloresDelBoton = ['blue', 'yellow', 'green', 'magenta', 'gray', 'red', 'cyan', 'purple']

function CardProjects({ title, description, buttonText }) {
    const [index, setIndex] = useState(0); // Un solo índice para ambos
  
    const handleClick = () => {
      setIndex((prevIndex) => (prevIndex + 1) % intereses.length);
    };
  
    return (
      <>
        <p>{title} - {description}</p>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: coloresDelBoton[index],
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          {buttonText}: {intereses[index]}
        </button>
      </>
    );
  }
  
  export default CardProjects;