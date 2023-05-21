import "./NavBar.css"
import SearchBar from "../SearchBar/SearchBar"
import {NavLink, Link} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  // const logoHeaderPrueba = '../../assets/logoHeader.png'
  const logoHeader = "https://static.vecteezy.com/system/resources/thumbnails/008/976/210/small/clothing-store-logo-design-with-hanger-illustration-vector.jpg"
  return (
    <header>
      <div className="subNav1">
        <Link to={"/"}><img className="logoHeader" src={logoHeader} alt=""/></Link>
        {/* <img src={require('../../assets/logoHeader.png')} alt="" /> */}
        <SearchBar />

        <ul>
          <li>Ayuda</li>
          <li>Registrarse</li>
          <li>Iniciar Sesión</li>
          <li><CartWidget/></li>
        </ul>
      </div>
      <div className="subNav2">
        <ul>
          <li><Link className="NavLi" to={"/"}>Inicio</Link></li>
          <li><NavLink className="NavLi" to={`/categoria/2`}>Buzos</NavLink></li>
          <li><NavLink className="NavLi" to={`/categoria/1`}>Remeras</NavLink></li>
          {/* <li>TALLES</li>
          <li>Política de Devolución</li> */}
        </ul>
      </div>

    </header>
  )
}

export default NavBar