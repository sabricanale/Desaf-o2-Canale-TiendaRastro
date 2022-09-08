import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"

const producto1 = {
    id: '1',
    title: 'Remera lisa algodón Jersey Peinado Premium',
    price: '$2500',
    img:'images/RemeraNegra.jpg',
    detalle: 'Confeccionamos con telas de primera calidad. Algodón 100% jersey 24/1 de textura suave y liviana. Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad. Cuello de Reeb fino al tono. Tirillera de hombro a hombro con hilos de Algodón. TapaCostura 2AG Fino con hilos de algodón en mangas y cintura. Producto ideal para Impresión en: Serigrafia, DTG, Tranfers, Bordado , y Vinilo.'    
    }

const ItemDetailContainer = () => {

    const[data, setData] = useState({})

    useEffect(()=>{
        const getData = new Promise (resolve => {
            setTimeout(()=>{
                resolve(producto1)
            },2000)
        })
        getData.then(res => setData(res))
    }, [])
    
    return (
    <>
    <ItemDetail data ={data} />
    </>
  )
}

export default ItemDetailContainer