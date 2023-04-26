import "./NavBar.css"
import SearchBar from "../SearchBar/SearchBar"

function NavBar() {
  return (
    <header>
      <div className="subNav1">
        <h1>Logo de la tienda</h1>

        <SearchBar />

        <ul>
          <li>Ayuda</li>
          <li>Registrarse</li>
          <li>Iniciar Sesión</li>
        </ul>
      </div>
      <div className="subNav2">
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
          <li>TALLES</li>
          <li>Política de Devolución</li>
        </ul>
      </div>

    </header>
  )
}

export default NavBar