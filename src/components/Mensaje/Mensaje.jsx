import { useState } from "react"

const Mensaje = () => {
    let [mensaje, SetMensaje] = useState(false)
    const manejadorMensaje = () => {
        SetMensaje(!mensaje)
    }
  return (
    <div>
        <button onClick={manejadorMensaje}>{mensaje ? "Ocultar" : "Mostrar"}</button>
        {mensaje && <h2>aguante el UseState!!</h2>}
    </div>
  )
}

export default Mensaje