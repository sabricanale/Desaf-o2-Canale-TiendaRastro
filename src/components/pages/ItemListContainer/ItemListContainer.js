import {useEffect, useState} from 'react'
import ItemList from '../../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const products = [
  {id: 1, img:'images/RemeraNegra.jpg',  title: 'Remera lisa', price: '$2500', category: 'Indumentaria'},
  {id: 2, img:'images/Gorra.webp', title: 'Gorra', price: '$1500', category: 'Accesorios'  }, 
  {id: 3, img:'images/Llavero.webp', title: 'Llavero', price: '$500', category: 'Accesorios' },
  {id: 4, img:'images/remeraEstampada.webp', title: 'Remera estampada', price: '$2500',  category: 'Indumentaria'}
];

export const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([])

    const {categoriaId} = useParams()

    useEffect(()=>{
       const getData = new Promise (resolve =>{
            setTimeout(()=>{
            resolve(products)
            }, 1000)
        });

        if(categoriaId){
          getData.then(res => setData(res.filter(product => product.category === categoriaId)))
        }else{
          getData.then(res => setData(res))
        }     
    }, [categoriaId])
     

    return (
    <>
    <h2>{greeting}</h2>
    <ItemList lista={products}/>
    </>
    
  )
}

export default ItemListContainer
