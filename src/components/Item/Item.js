

const Item = ({title, price, img}) => {
  return (
    <>
      <div className="m-4">
        <div className='img-fluid m-3'>
          <img width={'200px'} src={img} alt='img'/>
        </div>
        <div>
            <h4>{title}</h4>
            <h6>{price}</h6>
        </div>
    </div>
    </>
  )
}

export default Item