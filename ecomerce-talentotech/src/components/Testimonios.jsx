import '../style/Testimonios.sass'
function Testimonios(){
    return(
        <section className="testimonios">
            <h2>Lo que dicen nuestros clientes</h2>
            <div className="testimonial-grid">
            <div className="testimonial">
                <p>"Excelente calidad y servicio. ¡Repetiré!"</p>
                <span>- Ana, CDMX</span>
            </div>
            <div className="testimonial">
                <p>"Recibí mi pedido en 2 días. Muy recomendados."</p>
                <span>- Pedro, Guadalajara</span>
            </div>
            <div className="testimonial">
                <p>"Me encantaron los productos, justo como en las fotos."</p>
                <span>- Laura, Monterrey</span>
            </div>
            </div>
        </section>
    )
}

export default Testimonios