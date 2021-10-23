# Bitz


 > Controlar la complejidad es la esencia de la programación. - Brian Kernigan




![React app](public/assets/reactjs.jpg)

## `Descipcion del proyecto`



~~~

Esta aplicacion es el front end de un ecommerce de venta de indumentaria desarrollado con React. Esta app utiliza React Hooks que permiten usar el estado, ciclo de vida, contexto (useContext), hook de efecto (useEffect) y las referencias (refs) de React sin escribir una clase y permiten reutilizar lógica de estado sin cambiar la jerarquía de un componente. 
Esta app utiliza Firestore/Firebase para la gestion de datos.

~~~

#### ` Para clonar este proyecto usar el siguiente comando de Github:`

####  git clone https://github.com/marianjuli/bitzshop.git



#### Luego posicionarse en el directorio del proyecto y ejectuar el comando ***npm run start***

## `Dependencias instaladas:`

~~~

"dependencies": {
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "bootstrap": "^5.1.3",
    "firebase": "^9.1.2",
    "node-sass": "^6.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-fontawesome": "^1.7.1",
    "react-router-dom": "^5.3.0",
    "react-scripts": "^3.4.4",
    "styled-components": "^5.3.1",
    "sweetalert": "^2.1.2",
    "web-vitals": "^1.0.1"
  },
 
~~~

#### Para instalar las dependencias: ***npm install***




## `Caracteristicas generales de los componentes`


### Navbar:

~~~

1. El logo lleva a la ruta a principal de la app donde se muestran todos los productos  ('/' )
2. La lista desordenada de elementos del Navbar tiene los siguientes items: Productos, Mujer, Hombre, Niño, Login y el CartWidget.
3. Mediante el uso de NavLink en los elementos  Mujer, Hombre y Niño, se muestran  los productos correspondientes a cada categoria.
4. El elemento Login de la lista del Navbar navega al componente Login en el que el usuario podra hacer login y logout.
5. El Cartwidget muestra el numero de items agregados.

~~~

### Catalogo

~~~

El catalogo de productos esta desarrollado en el componente ItemListContainer. Este componente es el inicio de la app y muestra todos los productos disponibles, con su imagen, su precio y un button que lleva al detalle del producto. En este componente se hace uso del Hook useEffect en una funcion que trae los items por categoría.

~~~

### Detalle de producto

~~~

El detalle de cada producto esta desarrollado en el componente ItemDetail y su componente container es ItemDetailContainer. En este componente mediante el Hook useParams, que permite configurar parámetros dinámicos en la URL, se accede a cada Item mediante su ID, que se determinado en el componente App y la Route correspondiente. En este componente se hace uso del Hook useEffect en una funcion que trae los items por ID. El componente ItemDetailContainer, le pasa la props "product" al componente ItemDetail. El componente ItemDetail renderea la imagen del item, un contador para aumentar o decrementar la cantidad, el stock, la categoría, el precio, la descripcion, y dos buttons - uno que agrega el item al Cart y otro para volver al inicio.

~~~


### CartContext

~~~


En el CartContext se creó un contexto para las funciones del Cart, justamente para poder exportarlas al componente Cart sin la necesidad de pasar esas funciones por props.
Este componente tiene las siguientes funciones:

La función addProduct que agrega un item al Cart. Primero busca en el array si existe. Si existe suma la cantidad a uno existente. Si no existe agrega uno nuevo.

La  función deleteProduct elimina un producto del Cart.

La  función getQuantity cuenta los items y suma la cantidad.

La  función calculateTotal calcula el total mediante el metodo reduce, suma la cantidad de items y los multiplica por su precio.

La  función emptyCart elimina todos los productos agregados al Cart dejandolo en cero, o sea, vacio.

~~~


### CartWidget

~~~

Este componente muestra en un badge la cantidad de productos que se agregan al Cart mediante la función getQuantity que viene del context CartContext y vuelve a ponerse en cero una vez que los productos han sido removidos del Cart o se ha cancelado la compra.

~~~

### Formulario de compra 

~~~

El componente Cart muestra los items cargados con su imagen, cantidad, id, titulo, descripcion y precio a la izquierda.
A la derecha muestra el subtotal y total.

Tiene 5 buttons:

Button Seguir comprando esta ruteado a '/' para volver al inicio.
Button Eliminar para eliminar un item en particular.
Button Confirmar confirma la compra y dispara la funcion confirmOrder(). Los datos de los items agregados al componente Cart  (cantidad, total, items, email del usuario logueado) y los datos opcionales de contacto (teléfono, dirección y comentario), se almacenan en una constante dentro de una funcion que se dispara al confirmar la compra. Los datos de la compra son almacenados en Firestore con una función que crea una orden, asigna la fecha actual, controla que haya stock, y finalmente realiza un batch.commit() 

Button Cancelar dispara la funcion empyCart() que vacía el carrito.
Button Agregar Contacto abre el formulario de Contacto.

Esta app permite la identificación de usuarios a traves de un formulario Login y un Context para el usuario, desde donde se exportan el login, logout y el user.
El Cart tiene un formulario de contacto en el que el usuario opcionalmente puede completar otros datos de contacto a traves de múltiples inputs, que tambien permite editarlos o eliminarlos. Para realizar una compra el usuario debe estar logueado.

~~~

### Componente App

~~~

Este es el componente central de React ya que en el se configura el enrutamiento dinamico de todos los componentes de la aplicacion mediante React Router Dom. En ek componente App el context del Cart, de user y de notification envuelven toda la aplicación. A diferencia de la arquitectura de enrutamiento tradicional en la que el enrutamiento se maneja en una configuración fuera de una aplicación en ejecución, React Router DOM facilita el enrutamiento basado en componentes de acuerdo con las necesidades de la aplicación y la plataforma.

~~~



### Estilos utilizados:

~~~

CSS
SCSS
Styled Components
Material UI
Bootstrap
Fontawesome

~~~

### Enlaces consultados para este proyecto:


<https://reactjs.org/docs/hooks-intro.html>

<https://www.codigofacilito.com/articulos/react-hooks>

<https://frontarm.com/courses/react-fundamentals/>






### Agradecimientos


~~~

Por último quiero agradecer al profesor Sebastian Zuviria porque nos transmitió su vasto conocimiento de React con muchísima claridad, una excelente actitud, y además nos dió sugerencias y guías útiles para el ámbito profesional y la carrera de desarrollador. También quiero agradecer al tutor Diego Alvarado que contestó todas las consultas siempre, rápidamente y de forma muy clara, e intervino en las clases recomendando como trabajar con los desafíos. Sin ellos este proyecto no hubiera sido posible. 

~~~
 

 ### Gracias! 





