import "./CartWidget.css"

const CartWidget = () => {
    const ImgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
    <div>
        <img className="imgCarrito" src={ImgCarrito}alt="Carrito" />
        <strong>1</strong>
    </div>
  )
}

export default CartWidget