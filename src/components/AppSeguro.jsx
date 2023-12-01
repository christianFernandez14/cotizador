import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"

const AppSeguro = () => {

  const { modal } = useCotizador()

  console.log(modal)

  return (
    <>
      <header className='my-10'>
        <h1 className='text-white text-center text-4xl'>Cotizador de seguro seguro de Autos</h1>
      </header>
      <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>

        <Formulario />

      </main>
    </>
  )
}

export default AppSeguro