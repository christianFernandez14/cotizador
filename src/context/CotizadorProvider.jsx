import { createContext } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

  const hola = 'Hola desde una constante'

  const fnHola = () => {
    console.log('Hola desde una funcion')
  }

  return (
    <CotizadorContext.Provider
      value={{
        hola,
        fnHola
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