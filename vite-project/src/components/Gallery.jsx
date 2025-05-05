import '../styles/style.css';

const gallery = [
    'https://randomuser.me/api/portraits/women/10.jpg',
    'https://randomuser.me/api/portraits/men/29.jpg',
    'https://randomuser.me/api/portraits/women/38.jpg',
    'https://randomuser.me/api/portraits/men/47.jpg',
]
function Gallery(){
    return(
        <section className='img-team-hover'>
        {gallery.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Imagen ${index + 1}`}
            className="img-hover"
            style={{ borderRadius: '12px', padding:'1rem', }}
          />
        ))}
      </section>
    )
}
export default Gallery