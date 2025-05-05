function Nav(){
    const listaNav = ['Home','About', 'Contact',]
    return(
        <nav>
            <ul>
                {listaNav.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </nav>
    )
}
export default Nav