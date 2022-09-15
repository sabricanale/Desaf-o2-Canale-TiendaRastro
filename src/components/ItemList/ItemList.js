import Item from '../Item/Item';
import { Link } from 'react-router-dom'
import './ItemList.css'


const ItemList = ({lista}) => {
    
  return (
    <>
    {
        lista.map((product)=>(
          <Link key={product.id}  to={'/detail' + product.id} style={{ textDecoration :'none'}}>
        <div className='tarjeta'>
          <div className='card h-auto w-auto'>
            <Item 
              id= {product.id}
              img={product.img}      
              title={product.title} 
              price={product.price}
              category = {product.category}
            /> 
          </div>
        </div>
        </Link>
                
        ))
    }
    </>
  )
}

export default ItemList