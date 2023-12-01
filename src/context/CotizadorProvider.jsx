import { useState, createContext } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const handleChangedatos = e => {
    // Comprobando que estoy accediendo a los valores
    // console.log(e.target.name)
    // console.log(e.target.value)

    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangedatos
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext