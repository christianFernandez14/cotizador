import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants/index";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {

  const { datos, handleChangedatos, error, setError } = useCotizador();

  

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(datos).includes('')) {
      setError('Todo los campos son requeridos')

      return;
    }
    setError('')
  }

  return (

    <>
      {error && <Error />}
      <form
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label className="block mb-3 font-bold  text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e => handleChangedatos(e)}
            value={datos.marca}
          >
            <option value="">-- Seleciona Marca --</option>
            {
              MARCAS.map(marca => (
                <option
                  key={marca.id}
                  value={marca.id}
                >{marca.nombre}</option>))
            }
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold  text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e => handleChangedatos(e)}
            value={datos.year}
          >
            <option value="">-- Seleciona Año --</option>
            {
              YEARS.map(year => (
                <option
                  key={year}
                  value={year}
                >{year}</option>))
            }
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold  text-gray-400 uppercase">
            PLANES
          </label>
          <div className="flex gap-3 items-center">
            {
              PLANES.map(plan => (
                <Fragment key={plan.id}>

                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    onChange={e => handleChangedatos(e)}
                  />
                  <label>{plan.nombre}</label>

                </Fragment>
              ))
            }
          </div>
        </div>

        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
        />

      </form>
    </>
  )
}

export default Formulario