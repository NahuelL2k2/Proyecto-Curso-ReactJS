import "./SearchBar.css"
import { useState } from "react"

const SearchBar = () => {
    const [busqueda, setBusqueda] = useState("")
    const manejarBusqueda = (evento) => {
        setBusqueda(evento.target.value)
    }
  return (
    <div className="divBar">
        <input className="searchBar" type="text" placeholder="Buscar..." value={busqueda} onChange={manejarBusqueda} />
    </div>
  )
}

export default SearchBar