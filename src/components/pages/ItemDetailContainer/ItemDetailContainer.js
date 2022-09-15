import ItemDetail from "../../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import {data} from '../../mockData'
import { useParams } from "react-router-dom"

const products = [
    {id: 1, title: 'Remera lisa', price: '$2500', img:'images/RemeraNegra.jpg', category: 'Indumentaria'},
    {id: 2, title: 'Gorra',price: '$1500',img: 'images/Gorra.webp', category: 'Accesorios'  }, {id: 3,
    title: 'Llavero',price: '$500', img: 'images/Llavero.webp', category: 'Accesorios' },{id: 4,title: 'Remera estampada',
    price: '$2500', img:'images/remeraEstampada.webp', category: 'Indumentaria'}
  ] 


export const ItemDetailContainer = () => {

    const[data, setData] = useState({})
    const {detalleId} = useParams()

    useEffect(()=>{
        const getData = new Promise (resolve => {
            setTimeout(()=>{
                resolve(products)
            },2000)

            getData.then(res => setData(res.find(products => products.id === parseInt(detalleId))))
            
        })
        
    }, [])
    
    return (
    <>
    <ItemDetail data ={data} />
    </>
  )
}

export default ItemDetailContainer