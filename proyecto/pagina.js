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

     // Crear el primer botón
     var boton1 = document.createElement('button');
     boton1.textContent = 'Botón 1';
 
     // Crear el segundo botón
     var boton2 = document.createElement('button');
     boton2.textContent = 'Botón 2';
 
     // Crear elementos de lista (li) para los botones
     var liBoton1 = document.createElement('li');
     var liBoton2 = document.createElement('li');
 
     // Agregar los botones a los elementos de lista
     liBoton1.appendChild(boton1);
     liBoton2.appendChild(boton2);
 
     // Agregar los elementos de lista a la lista
     ul.appendChild(liBoton1);
     ul.appendChild(liBoton2);
 
     // Agregar la lista al elemento de navegación
     nav.appendChild(ul);

    // Agrega el elemento de navegación al nuevo div
    nuevoDiv.appendChild(nav);
});