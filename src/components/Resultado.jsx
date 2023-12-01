import { useCallback, useMemo, useRef } from "react";
import useCotizador from "../hooks/useCotizador"
import {MARCAS, PLANES} from '../constants/index'

const Resultado = () => {

  const { resultado, datos } = useCotizador()
  const {marca, plan, year} = datos

  // Como el año no maneja una funcion, el hook ideal para que persista el valor es useRef
  const yearRef = useRef(year)

  const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), [resultado])
  const [tipoPlan] = PLANES.filter(p => p.id === Number(plan))

  // console.log(nombreMarca)

  if (resultado === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
        Resumen
      </h2>
      <div className="">
        <p className="my-2 ">
          <span className="font-bold">Marca: {nombreMarca.nombre}</span>
        </p>
        <p className="my-2 ">
          <span className="font-bold">Plan: {tipoPlan.nombre}</span>
        </p>
        <p className="my-2 ">
          <span className="font-bold">Año: {yearRef.current}</span>
        </p>
        <p className="my-2 text-2xl">
          <span className="font-bold">Cotización: {resultado}</span>
        </p>
      </div>
      
    </div>
  )
}

export default Resultado