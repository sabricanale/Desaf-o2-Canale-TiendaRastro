import {Link} from 'react-router-dom'




const ItemDetail = ({data}) => {
  return (
    <>

  <div className="row m-5">
  <h2 className="pb-4">Descripción del producto</h2>
  <Link to={`/detalle/${data.id} `} >
    <div className="col-md-4">        
        <img height={'300px'} src= {data.img}  alt="Remera Negra"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h4 className="card-title">{data.title}</h4>
        <h3 className="card-text">{data.price}</h3>
        <p className="card-text"><small class="text-muted">{data.detalle}</small></p>
      </div>
    </div>
    </Link>
  </div>

    </>
  )
}

export default ItemDetail