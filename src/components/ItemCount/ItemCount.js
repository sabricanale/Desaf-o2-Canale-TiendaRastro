import {useState} from 'react'
import remeraNegra from '../Assets/RemeraNegra.jpg'
import './ItemCount.css'


const ItemCount = (props) => {
    
    const [items, setItems] = useState(0)

    const sumar = () => items < props.stock ? setItems(items + 1) : alert('Se alcanzó el máximo de productos')
    const restar = () => items > 0 ? setItems(items - 1) : null
    
    
    

    return (
    <>
        <div className="card m-4">
            <div className='img-fluid m-3'>
                 <img src={remeraNegra} className='remera'/>
            </div>
            <div>
            <p>Remera lisa negra <p>$2500</p></p>
            <div className='m-2'>Quedan {props.stock} artículos disponibles</div>   
            </div>
            
            
            <div className="btn-group m-auto" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" onClick={restar}>-</button>
                <button type="button" className="btn btn-outline-primary">{items}</button>
                <button type="button" className="btn btn-outline-primary" onClick={sumar}>+</button>     
        </div>
        <div className='m-2'>Estás agregando {items} artículos a tu carrito de compras</div>
        <div className='pb-3'>
        <button type="button" className="btn btn-outline-primary m-auto">Agregar al carrito</button>   
       
        </div>
       
        
    
   
        </div>

        
        
  
       
    </>

  )
}

export default ItemCount