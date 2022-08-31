import logo from '../Assets/LogoRastro.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div className='navBar-contenedor'>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={logo} className='App-logo' alt='logo'/>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </div>
    )
}
export default NavBar



