import "./CartWidget.css"

const CartWidget = () => {
    const ImgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
    <div className="carrito">
        <img className="imgCarrito" src={ImgCarrito}alt="Carrito" />
        <strong className="numCarrito">0</strong>
    </div>
  )
}

export default CartWidget