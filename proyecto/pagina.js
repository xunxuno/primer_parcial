document.addEventListener('DOMContentLoaded', function() {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');

    // Configurar atributos de Div
    nuevoDiv.id = 'menu-principal';
    nuevoDiv.style.width = '100%';
    nuevoDiv.style.height = '71px';
    nuevoDiv.style.margin = '0px';
    nuevoDiv.style.paddingTop = '0';
    nuevoDiv.style.display = 'flex';
    nuevoDiv.style.top = '0';
    nuevoDiv.style.borderTop = 'none';
    nuevoDiv.style.position = 'fixed';

    // Agregar el nuevo div al cuerpo del documento
    document.body.appendChild(nuevoDiv);

    // Crear el elemento de navegación (nav)
    var nav = document.createElement('nav');

    //Estilos del nav
    nav.id = 'nav-principal';
    nav.style.height = '71px';
    nav.style.width = '100%';
    nav.style.marginTop = '0%';
    nav.style.marginLeft = '210px';
    nav.style.marginRight = '266px';
    nav.style.display = 'flex';
    nav.style.alignItems = 'center'
    nav.style.justifyContent = 'flex-start';

    // Crear un contenedor para los botones (ul1)
    var ul = document.createElement('ul');
    ul.style.display = 'flex'; 
    ul.style.listStyle = 'none';
    ul.style.height = '71px';
    ul.style.width = '130px';
    ul.style.alignItems = 'center';
    ul.style.justifyContent = 'flex-start'; 
    ul.style.margin = '0';

    //ul2
    var ul2 = document.createElement('ul');
    ul2.style.display = 'flex';
    ul2.style.listStyle = 'none';
    ul2.style.marginLeft = '565px';
    ul2.style.width = '300px';



    // Crear el primer botón
    var boton1 = document.createElement('button');

    boton1.addEventListener('click', function(){
        alert('woooow, hiciste click!!!!');
    });

    var img1 = document.createElement('img');

    // segundo boton
    var boton2 = document.createElement('button');

    //estilos img1
    img1.src = 'src/logo1.svg';
    img1.style.border = '0';
    img1.style.display = 'flex';
    img1.style.paddingLeft = '0%';
    img1.style.paddingRight= '50px';
    img1.style.width = '180px';
    img1.style.alignContent = 'center';
    img1.style.backgroundColor = "transparent";

    //estilos boton1
    boton1.style.width = '180px';
    boton1.style.border = '0';
    boton1.style.paddingRight = '30px';
    boton1.style.marginTop = '11px';
    boton1.style.marginBottom = '17px';
    boton1.style.marginLeft = '2px';
    boton1.style.display = 'flex';
    boton1.style.alignItems = 'center';
    boton1.style.backgroundColor = "transparent";
    boton1.style.cursor = 'pointer';

    //estilos boton2
    boton2.style.width = '260px';
    boton2.textContent = 'IDIOMA DE LA PÁGINA: ESPAÑOL';
    boton2.style.alignItems = 'center';
    boton2.style.height = '19px'; 
    boton2.style.backgroundColor = "transparent"; 
    boton2.style.marginTop = '11px';
    boton2.style.color = '#afafaf';
    boton2.style.fontSize = '13px';
    boton2.style.lineHeight = '5px';
    boton2.style.letterSpacing = '0.8px';
    boton2.style.marginLeft = '0';
    boton2.style.textAlign = 'left';
    boton2.style.padding = "0";
    boton2.style.fontWeight = "bolder";
    boton2.style.border = 'none';
    boton2.style.fontWeight = '700';
    boton2.style.textTransform = 'uppercase';
    boton2.style.cursor = 'pointer';


    //accion del boton 2
    boton2.addEventListener("mouseover", function() {
        boton2.style.color = '#C2C2C2';
        menuDiv.style.display = 'block';
    });
    

    boton2.addEventListener("mouseleave", function() {
        boton2.style.color = '#afafaf';
        menuDiv.style.display = 'none';
    });
 

 
    // Crear elementos de lista (li) para boton1
    var liBoton1 = document.createElement('li');
    liBoton1.style.display = 'flex';
    liBoton1.style.margin = '0';
    liBoton1.style.padding = '0';
    liBoton1.style.border = 'none';
    liBoton1.style.height = '70';

    //li boton2
    var liBoton2 = document.createElement('li');
    liBoton2.style.height = '45px'; //70
    liBoton2.style.margin = '0';
    liBoton2.style.padding = '0';
    liBoton2.style.border = 'none';

    // Imagen de menu de idiomas
    var btnMenu = document.createElement("img");
    btnMenu.src = 'src/idioma.svg';
    btnMenu.style.right = '100%';

    // menu de idiomas
    var menuDiv = document.createElement('div');
    menuDiv.style.backgroundColor = 'red';
    menuDiv.style.width = '415px'
    menuDiv.style.height = '563px';
    menuDiv.style.marginTop = '57px';
    menuDiv.style.marginLeft = '54.6%';
    menuDiv.style.borderRadius = '10px';
    menuDiv.style.display = 'none';

    


    // Función para crear columnas y 13 botones personalizados por fila
    function crearColumnasYBotones() {
        // Obtener el div contenedor
        var contenedor = document.getElementById('contenedor');

        // Crear las dos columnas
        var columna1 = document.createElement('div');
        var columna2 = document.createElement('div');
        columna1.className = 'columna';
        columna2.className = 'columna';

        // Agregar las columnas al contenedor
        contenedor.appendChild(columna1);
        contenedor.appendChild(columna2);

        // Definir información para cada botón
        var contenidoBotones = [
            { imagen: 'imagen1.jpg', texto: 'Texto Botón 1' },
            { imagen: 'imagen2.jpg', texto: 'Texto Botón 2' },
            { imagen: 'imagen3.jpg', texto: 'Texto Botón 3' },
            // ... Añadir más objetos según sea necesario
        ];

        // Crear 13 filas en cada columna
        for (var i = 0; i < 13; i++) {
            var fila1 = document.createElement('div');
            var fila2 = document.createElement('div');
            fila1.className = 'fila';
            fila2.className = 'fila';

            // Crear botones en cada fila
            for (var j = 0; j < contenidoBotones.length; j++) {
                var boton1 = crearBoton(contenidoBotones[j]);
                var boton2 = crearBoton(contenidoBotones[j]);

                // Agregar botones a las filas
                fila1.appendChild(boton1);
                fila2.appendChild(boton2);
            }

            // Agregar filas a las columnas
            columna1.appendChild(fila1);
            columna2.appendChild(fila2);
        }
    }

    // Función para crear un botón con imagen y texto
    function crearBoton({ imagen, texto }) {
        var boton = document.createElement('div');
        boton.className = 'boton';

        // Crear imagen
        var imagenElemento = document.createElement('img');
        imagenElemento.src = imagen;
        imagenElemento.alt = texto;

        // Crear texto
        var textoElemento = document.createElement('span');
        textoElemento.textContent = texto;

        // Agregar imagen y texto al botón
        boton.appendChild(imagenElemento);
        boton.appendChild(textoElemento);

        return boton;
    }


    //estilos tabla
    tabla.style.backgroundColor = 'blue';
    tabla.style.marginLeft = '15px';
    tabla.style.marginRight = '21.6%';
    tabla.style.paddingTop = '6%';



    //agregar tabla al menu
    menuDiv.appendChild(contenedor);


    


    // NAVEGACION //////////////////////////////////////
    
    // Agregar imagen de menu a boton2
    boton2.appendChild(btnMenu);

    //Agregar img1 a boton1
    boton1.appendChild(img1);
 
    // Agregar los botones a los elementos de lista
    liBoton1.appendChild(boton1);
    liBoton2.appendChild(boton2);
 
    // Agregar los elementos de lista a la lista
    ul.appendChild(liBoton1);
    ul2.appendChild(liBoton2);
 
    // Agregar la lista al elemento de navegación
    nav.appendChild(ul);
    nav.appendChild(ul2);

    // Agrega el elemento de navegación al nuevo div
    nuevoDiv.appendChild(nav);


    // SECCION 1 ////////////////////////////////////

    // div de la seccion 1
    var divSeccion1 = document.createElement('div');
    
    
    // Agregar menu 
    divSeccion1.appendChild(menuDiv);
    //menuDiv.appendChild(areaBoton);

    // Agrega el nuevo div debajo del div existente
    nuevoDiv.parentNode.insertBefore(divSeccion1, nuevoDiv.nextSibling);
});