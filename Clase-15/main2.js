//EJEMPLO SPA PLANTILLA
const app=new ProductoController(new ProductoModel(),new ProductoView());
//app.agregar('#app');
//app.listar('#app');
//app.buscar('#app');

const routes = [
  { path: '/'       , action: 'agregar' },
  { path: '/pagina1', action: 'listar' },
  { path: '/pagina2', action: 'buscar' },
];

console.dir(location);
//OBTENER LA RUTA ACTUAL (USAMOS EL OBJETO LOCATION Y SU PROPIEDAD HASH)
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
console.log(parseLocation());

const findActionByPath = path => routes.find(r => r.path == path);

const router = () =>{
  //OBTENER LA RUTA ACTUAL
  const path = parseLocation();
  const route = findActionByPath(path);
  //LLAMAMOS AL METODO CORRESP PARA LA ACCION ENCONTRADA
  switch (route.action) {
    case 'agregar':
      app.agregar('#app');
      break;
    case 'listar':
      app.listar('#app');
      break;
    case 'buscar':
      app.buscar('#app');
      break;
    default:
      ErrorComponent('#app');
      break;
  }

}

//CADA VEZ QUE SE DETECTA LA CARGA DE LA VENTANA SE LLAMA A LA FUNCION ROUTER
$( window ).on( 'load', function()  {
  router();
});
//CADA VEZ QUE SE DETECTA UN CAMBIO EN EL HASH (EJEMPLO la URL CAMBIA DE #/pagina1 a #/pagina2) SE LLAMA A LA FUNCION ROUTER
$( window ).on( 'hashchange', function() {
    router();
} );
