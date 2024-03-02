document.addEventListener('DOMContentLoaded', function() {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');

    // Configurar atributos de Div
    nuevoDiv.id = 'menu-principal';
    nuevoDiv.style.width = '100%';
    nuevoDiv.style.height = '71px';
    nuevoDiv.style.margin = '0px';
    nuevoDiv.style.paddingTop = '0';
    nuevoDiv.style.backgroundColor = 'red';
    nuevoDiv.style.display = 'flex';
    nuevoDiv.style.border= 'none';
    nuevoDiv.style.position = 'fixed';

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
    nav.style.marginLeft = '200px';
    nav.style.marginRight = '266px';
    nav.style.backgroundColor = 'blue';
    nav.style.display = 'flex';
    nav.style.alignItems = 'center'
    nav.style.justifyContent = 'flex-start';

    // Crear un contenedor para los botones (ul)
    var ul = document.createElement('ul');
    ul.style.display = 'flex'; 
    //ul.style.padding = '100px';
    ul.style.listStyle = 'none';
    ul.style.backgroundColor = 'yellow';
    ul.style.height = '71px';
    ul.style.width = '130px';
    ul.style.alignItems = 'center';
    ul.style.justifyContent = 'flex-start'; 
    ul.style.margin = '0';

     // Crear el primer botón
     var boton1 = document.createElement('button');
     var img1 = document.createElement('img');

     //estilos img1
     img1.src = 'src/logo1.svg';
     img1.style.border = '0';
     img1.style.display = 'flex';
     img1.style.paddingLeft = '0%';
     img1.style.paddingRight= '50px';
     img1.style.alignContent = 'center';
     img1.style.cursor = 'pointer';

     //estilos boton1
     boton1.style.width = '130px';
     boton1.style.border = '0';
     boton1.style.paddingRight = '30px';
     boton1.style.backgroundColor = 'red';
     boton1.style.marginTop = '11px';
     boton1.style.marginBottom = '17px';
     boton1.style.marginLeft = '0';
     boton1.style.display = 'flex';
     boton1.style.alignItems = 'center';
 

 
     // Crear elementos de lista (li) para los botones
     var liBoton1 = document.createElement('li');
     liBoton1.style.display = 'flex';
     liBoton1.style.margin = '0';
     liBoton1.style.padding = '0';
     liBoton1.style.backgroundColor = 'green';
     liBoton1.style.border = 'none';
     liBoton1.style.height = '70';

     //Agregar img1 a boton1
     boton1.appendChild(img1);
 
     // Agregar los botones a los elementos de lista
     liBoton1.appendChild(boton1);
 
     // Agregar los elementos de lista a la lista
     ul.appendChild(liBoton1);
 
     // Agregar la lista al elemento de navegación
     nav.appendChild(ul);

    // Agrega el elemento de navegación al nuevo div
    nuevoDiv.appendChild(nav);
});