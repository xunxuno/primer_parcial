document.addEventListener('DOMContentLoaded', function() {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');

    // Configurar atributos de Div
    nuevoDiv.id = 'menu-principal';
    nuevoDiv.style.width = '100%';
    nuevoDiv.style.height = '71px';
    nuevoDiv.style.margin = '0px';
    nuevoDiv.style.backgroundColor = 'red';
    nuevoDiv.style.display = 'flex';
   // nuevoDiv.style.justifyContent = 'space-between';
    //nuevoDiv.style.alignItems = 'center';

    // Agregar el nuevo div al cuerpo del documento
    document.body.appendChild(nuevoDiv);

    // Crear el elemento de navegación (nav)
    var nav = document.createElement('nav');

    //Estilos del nav
    nav.id = 'nav-principal';
    nav.style.height = '71px';
    nav.style.width = '100%';
    nav.style.marginTop = '0%';
    nav.style.marginLeft = '266px';
    nav.style.marginRight = '266px';
    nav.style.backgroundColor = 'blue';
    nav.style.alignItems = 'center';
    nav.style.display = 'flex';

    

    // Agrega el elemento de navegación al nuevo div
    nuevoDiv.appendChild(nav);
});