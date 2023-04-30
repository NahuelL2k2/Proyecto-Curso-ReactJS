import "./NavBar.css"
import SearchBar from "../SearchBar/SearchBar"

function NavBar() {
  // const logoHeaderPrueba = '../../assets/logoHeader.png'
  const logoHeader = "https://static.vecteezy.com/system/resources/thumbnails/008/976/210/small/clothing-store-logo-design-with-hanger-illustration-vector.jpg"
  return (
    <header>
      <div className="subNav1">
        <img className="logoHeader" src={logoHeader} alt=""/>
        {/* <img src={require('../../assets/logoHeader.png')} alt="" /> */}
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