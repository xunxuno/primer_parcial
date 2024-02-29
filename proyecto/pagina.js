document.addEventListener('DOMContentLoaded', function() {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');

    // Configurar atributos de Div
    nuevoDiv.id = 'menu-principal';
    nuevoDiv.style.width = '100%';
    nuevoDiv.style.height = '71px';
    nuevoDiv.style.margin = '0px';
    nuevoDiv.style.backgroundColor = 'red';
    nuevoDiv.textContent = 'menu';

    // Agregar el nuevo div al cuerpo del documento
    document.body.appendChild(nuevoDiv);

    // Crear el elemento de navegación (nav)
    var nav = document.createElement('nav');

    //Estilos del nav
    nav.id = 'nav-principal';
    nav.style.height = '71px';
    nav.style.marginTop = '0%';
    nav.style.marginLeft = '140px';
    nav.style.marginRight = '140px';
    nav.style.backgroundColor = 'blue';

    // Crea elementos de lista (ul y li)
    var ul = document.createElement('ul');
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');

    // Crea elementos de enlace (a)
    var enlace1 = document.createElement('a');
    var enlace2 = document.createElement('a');

    // Agrega texto a los enlaces
    enlace1.textContent = 'Inicio';
    enlace2.textContent = 'Servicios';

    // Establece atributos y estilos según sea necesario
    enlace1.href = '#inicio';
    enlace2.href = '#servicios';

    // Agrega los enlaces a los elementos de la lista
    li1.appendChild(enlace1);
    li2.appendChild(enlace2);

    // Agrega los elementos de la lista a la lista
    ul.appendChild(li1);
    ul.appendChild(li2);

    // Agrega la lista al elemento de navegación
    nav.appendChild(ul);

    // Agrega el elemento de navegación al nuevo div
    nuevoDiv.appendChild(nav);
});