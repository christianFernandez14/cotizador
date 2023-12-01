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
