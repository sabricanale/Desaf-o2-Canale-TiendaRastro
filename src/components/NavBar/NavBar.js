import logo from '../Assets/LogoRastro.png'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navBar-contenedor'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink
                    to='/'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    </NavLink>
                                       
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                        <NavLink 
                            to='/'
                            style= {({isActive})=> 
                            isActive 
                            ? {fontWeight:'bold', color:'white', textDecoration:'none'}
                            : {color:'black', textDecoration:'none'}}>
                            <a className="nav-link">Inicio</a>
                        </NavLink>                              
                        </li>
                        <li className="nav-item ">
                        <NavLink 
                            to='/Categoría/Indumentaria'
                            style= {({isActive})=> 
                            isActive 
                            ? {fontWeight:'bold', color:'white', textDecoration:'none'}
                            : {color:'black', textDecoration:'none'}}>
                            <a className="nav-link">Indumentaria</a>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink 
                            to='/Categoría/Accesorios'
                            style= {({isActive})=> 
                            isActive 
                            ? {fontWeight:'bold', color:'white', textDecoration:'none'}
                            : {color:'black', textDecoration:'none'}}>
                            <a className="nav-link">Accesorios</a>
                        </NavLink>
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



