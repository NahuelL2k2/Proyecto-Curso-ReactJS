import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  return (
    <header>
      <h1>Titulo de la tienda</h1>
      
      <ul>
        <li>Remeras</li>
        <li>Camperas</li>
        <li>Buzos</li>
      </ul>
      <CartWidget/>
    </header>
  )
}

export default NavBar