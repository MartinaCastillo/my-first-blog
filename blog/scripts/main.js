let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}
}