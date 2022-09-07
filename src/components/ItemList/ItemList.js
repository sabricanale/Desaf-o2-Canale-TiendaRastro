import Item from '../Item/Item';

const ItemList = ({lista}) => {
    
  return (
    <>
    {
        lista.map((product)=>(
            <Item 
            key={product.id}
            title={product.title} 
            price={product.price} 
            img={product.img}       
            />     
        ))
    }
    </>
  )
}

export default ItemList