import { useState, createContext } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState('')

  const handleChangedatos = e => {
    
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  const cotizarSeguro = () => {

    console.log('cotizando')

    // Una base

    // Obtener diferencia de años

    // Hay que restar el 3% por cada año

    // Americano 15% 
    // Europeo 30%
    // Asiatico 5%

    // Básico 20%
    // Completo 50%
  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangedatos,
        error,
        setError,
        cotizarSeguro
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