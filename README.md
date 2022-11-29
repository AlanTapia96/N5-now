El componente App.jsx realiza la carga inicial de productos de mi app. En el caso de contar con una API de productos enviaría una request cuando accedo a la ruta /products.

El componente ProductsContainer tiene código comentado ya que es la forma (en borrador) en la que implamentaría añadir un producto y mostrarlo en el listado de productos:
- POST para guardar productos.
- GET al cargar nuevamente el componente, el cual traería ese nuevo producto creado.
Implementaria el hook useMemo también para enviar una request en caso de que sea necesario (en el caso de tener paginacion o que se agregue algún producto desde el form (podría ser con un flag en navigator o algo por el estilo).

Comentarios
- Pendiente Unit tests. Conocimientos básicos, no cuento con mucha experiencia, me encuentro estudiandoló.
- Para persistir en local storage iba a evaluar Redux Persist.
- No realicé requests a APIs, solo devuelvo los productos en el resolve de una Promise. Iba a poner requests a alguna API publica pero lamentablemente no llegué con los tiempos. En mi GITHUB hay repos donde lo realizo.
- Catchs y utilizaría la libreria toastify para indicar que hubo un error.
- El form solo agrega productos, no actualiza.


function reverse(str){
    const regex= new RegExp("[a-zA-Z]");
    const arrSpecialAux = []
    const result = []
    str.split("").forEach((character, i) => {
        if(regex.test(character)){
            result.push(character)
        } else {
            arrSpecialAux.push({'char':character, "pos": i})
        }
    })
    result.reverse()
    arrSpecialAux.forEach(c =>{
    result.splice(c.pos,0,c.char)
    })
        return result.join("")
    }

console.log(reverse("Ab,c,de!$"))