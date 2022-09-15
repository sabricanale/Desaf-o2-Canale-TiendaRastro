import logoCarrito from '../Assets/Carrito.png'
import { NavLink } from 'react-router-dom'
const CartWidget = () => {
  return (
    <NavLink to='/'>
        <img src={logoCarrito} className='LogoCarrito'/>
    </NavLink>
    
  )
}

export default CartWidget