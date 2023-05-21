import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedor'>
      <div className='contenedorItem'>
          <h2>{nombre} </h2>
          <h3>${precio} </h3>
          {/* <h3>{id} </h3> */}
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio eveniet facere maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?</p>
          <img src= {img} alt={nombre} />
          <ItemCount/>
      </div>
    </div>
  )
}

export default ItemDetail