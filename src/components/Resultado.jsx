import useCotizador from "../hooks/useCotizador"

const Resultado = () => {

  const { resultado } = useCotizador()

  if (resultado === 0) return null;
  
  return (
    <div>
      <p>Resultado: {resultado}</p>
    </div>
  )
}

export default Resultado