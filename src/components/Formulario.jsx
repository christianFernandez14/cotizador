import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants/index";

const Formulario = () => {
  return (

    <>

      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold  text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
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
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
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