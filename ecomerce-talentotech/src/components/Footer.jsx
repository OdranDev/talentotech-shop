import '../style/Footer.css'

function Footer(){
    const currentYear = new Date().getFullYear()

    return(
        <footer className='footer'>
            <div className='footer-container'>
                <div className="footer-section">
                <h3>TalentoTech Shop</h3>
                <p>Tu tienda de tecnología favorita con los mejores productos y precios.</p>
                </div>

                <div className="footer-section">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/product">Product</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Ayuda</h3>
                    <ul>
                        <li><a href="/faq">Preguntas frecuentes</a></li>
                        <li><a href="/envios">Envíos</a></li>
                        <li><a href="/devoluciones">Devoluciones</a></li>
                        <li><a href="/soporte">Soporte</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p>📧 info@talentotechshop.com</p>
                    <p>📞 +123 456 789</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
                        <a href="https://X.com" target="_blank" rel="noopener noreferrer">🐦 X</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
                    </div>    
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} TalentoTech Shop. Todos los derechos reservados.</p>
                <div className="footer-bottom-links">
                <a href="/privacidad">Política de Privacidad</a>
                <a href="/terminos">Términos y Condiciones</a>
                </div>
            </div>
            
        </footer>
    )
}
export default Footer