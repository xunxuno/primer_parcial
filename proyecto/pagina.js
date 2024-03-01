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

    // Crear un contenedor para los botones (ul)
    var ul = document.createElement('ul');
    ul.style.display = 'flex'; 
    //ul.style.padding = '100px';
    ul.style.listStyle = 'none';
    ul.style.backgroundColor = 'yellow';
    ul.style.height = '71px';
    ul.style.width = '130px';

     // Crear el primer botón
     var boton1 = document.createElement('button');
     var img1 = document.createElement('img');
     img1.src = 'src/logo1.svg';
     img1.style.border = '0';
     boton1.appendChild(img1);
     boton1.style.alignItems = 'center';
     boton1.style.width = '130px';
 

 
     // Crear elementos de lista (li) para los botones
     var liBoton1 = document.createElement('li');
 
     // Agregar los botones a los elementos de lista
     liBoton1.appendChild(boton1);
 
     // Agregar los elementos de lista a la lista
     ul.appendChild(liBoton1);
 
     // Agregar la lista al elemento de navegación
     nav.appendChild(ul);

    // Agrega el elemento de navegación al nuevo div
    nuevoDiv.appendChild(nav);
});