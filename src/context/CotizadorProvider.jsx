import { createContext } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

  return (
    <CotizadorContext.Provider>
      {children}
    </CotizadorContext.Provider>
  )
}

export{
  CotizadorProvider
}

export default CotizadorContext