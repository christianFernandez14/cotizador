PRYECTO COTIZADOR DE SEGUROS

Lo que vamos a ver:

1.- Contex Api
2.- useContex
3.- Dandole estilos (CSS) con focus Tailwind

=> ALGO DE TEORIA

    Que es ContextApi: Es tener un estado global sin dependencias (esta incluido en React), es decir sin Redux o Mobx

      => Esta disponible de la V16.3 (Esta más consolidad que los hooks, ya que estos aperecieron el V16.8)
      => Puede pasar state o funciones hasta los hijos que lo requieran, sin que los que esten de por medio lo tenga
      => Se define un archivo principal, y este lo vera cualquier componente que lo requiera
      => Se combina con el hook "useContext", es el que simplifica el acceso a los datos
      => Povaider, actulizas el state desde un componente hijo
      => A traves de Context, puedes crear librerias para React

=> ALGO DE TEORIA (Provider)

    => El Provider va en una carpeta externa (context)
    => Dentro del archivo del Provider con extension.jsx, importamos de "React" el createContext, como su nombre lo dice
       y es muy intuitivo, sirve para crear un Context
    => Definir bien nombre del Context y del Provider
    => El Provider tendra los state, effect y funciones, practicamente es de donde vienen los datos 
    => Existe dos Export
        => El nombrado (donde exportamos a CotizadorProvider), nos sirve para decirle a nuestra app, que hay algo disponible
           y cualquier componente puede acceder a este.
        => El default (donde exportamos a CotizadorContext), es el medio para decirle a mi aplicacion sobre el uso de un context
           y sera el parametro del hook "useContext", ya que puedes tener multiples Context a tu aplicacción y por lo tanto debes
           especificar con el useContext, a que Context haces referencia.
   
   Y este es su estructura basica

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

=> ALGO DE TEORIA (useCallbach y useMemo):

      Son hooks, que NO vam ser utilizados en el mismo componente, pero cumple una misma función

      => Evitar el Re-renerizado del state, si dependes de algun resultado para mostrar, 

