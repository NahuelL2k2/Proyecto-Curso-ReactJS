import "./Vista.css"
import { useState } from "react"

const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false)
    let cambiarModo = () =>{
        setModoOscuro(!modoOscuro)
    }

    const estilo = modoOscuro ? "oscuro" : "claro"

  return (
    <div className={estilo}>
        <button onClick={cambiarModo}>{estilo}</button>
        <h2>Componente Vista</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, laborum!</p>
    </div>
  )
}

export default Vista