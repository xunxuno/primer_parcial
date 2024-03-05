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
    //menuDiv.style.backgroundColor = 'red';
    menuDiv.style.width = '415px'
    menuDiv.style.height = '576px'; //563
    menuDiv.style.marginTop = '57px';
    menuDiv.style.marginLeft = '54.6%';
    menuDiv.style.borderRadius = '10px';
    menuDiv.style.display = 'none';
    menuDiv.style.position = 'static';
    menuDiv.style.border = '2px solid #E5E5E5';

    


    // tabla
    // Crear una tabla
    var tabla = document.createElement('table');
    // Crear filas y columnas
    for (var i = 0; i < 13; i++) {
        var fila = tabla.insertRow(i);
        for (var j = 0; j < 2; j++) {
        var celda = fila.insertCell(j);

        // Crear un botón con una imagen y un texto
        var boton = document.createElement('button');
        boton.innerHTML = '<img src="src/1n6ld1.jpg" style="width: 20px; height: 20px;" > Texto del botón';
        boton.style.width = '188px';
        boton.style.borderRadius = '10px';
        boton.style.height = '38px';
        boton.style.border = 'none';
        boton.style.backgroundColor = "transparent";

        // Agregar el botón a la celda
        celda.appendChild(boton);
        }
    }



    //estilos tabla
    //tabla.style.backgroundColor = 'blue';
    tabla.style.marginLeft = '15px';
    tabla.style.marginRight = '21.6%';
    tabla.style.paddingTop = '6%';



    //agregar tabla al menu
    menuDiv.appendChild(tabla);

    // div pirmera seccion
    var divPrimerTexto = document.createElement('div');
    nuevoDiv.parentNode.insertBefore(divPrimerTexto, nuevoDiv.nextSibling);
    //divPrimerTexto.style.backgroundColor = 'yellow';
    divPrimerTexto.style.width = '950px';
    divPrimerTexto.style.height = '400px';
    divPrimerTexto.style.marginLeft = '20.8%';
    divPrimerTexto.style.marginTop = '11.3%';

    var texto1 = document.createElement('div');
    //texto1.style.backgroundColor = 'red';
    texto1.style.width='420px';
    texto1.style.height='100px';
    texto1.textContent='¡La forma divertida, efectiva y';
    texto1.style.fontSize = '29.5px';
    texto1.style.position = 'absolute';
    texto1.style.right = '20.4%'; //20.4
    texto1.style.top = '33.3%'; 
    texto1.style.color = '#4B4B4B';
    texto1.style.fontWeight = "bolder";

    // texto 2
    var texto2 = document.createElement('div');
    //texto2.style.backgroundColor = 'yellow';
    texto2.style.width='420px'; //415
    texto2.style.height='100px';
    texto2.textContent='gratis de aprender un idioma!';
    texto2.style.fontSize = '29.5px';
    texto2.style.position = 'absolute';
    texto2.style.right = '20.4%';
    texto2.style.top = '39%';
    texto2.style.color = '#4B4B4B';
    texto2.style.fontWeight = "bolder";

    // botones de seccion1
    var boton1seccion1 = document.createElement('button');
    boton1seccion1.style.width= '331px';
    boton1seccion1.style.height = '54px';
    boton1seccion1.style.position = 'absolute';
    boton1seccion1.style.right = '23.3%';
    boton1seccion1.style.top = '50%'; //50
    boton1seccion1.style.borderRadius = '12px';
    boton1seccion1.textContent = 'EMPIEZA AHORA';
    boton1seccion1.style.fontSize = '15px';
    boton1seccion1.style.fontWeight = "bolder";
    boton1seccion1.style.color = '#FFFFFF';
    boton1seccion1.style.backgroundColor = '#58cc02';
    boton1seccion1.style.border = 'none';
    //borde del boton
    var boton1seccion1borde = document.createElement('button');
    //boton1seccion1borde.appendChild(boton1seccion1);
    boton1seccion1borde.style.width= '331px';
    boton1seccion1borde.style.height = '54px'; 
    boton1seccion1borde.style.position = 'absolute';
    boton1seccion1borde.style.right = '23.3%';
    boton1seccion1borde.style.top = '50.8%';
    boton1seccion1borde.style.borderRadius = '12px';
    boton1seccion1borde.style.backgroundColor = '#61B800';
    boton1seccion1borde.style.border = 'none';
    // funcion del boton1
    boton1seccion1.addEventListener("mouseover", function() {
        boton1seccion1.style.backgroundColor = '#61E002';
    });
    boton1seccion1.addEventListener("mouseleave", function() {
        boton1seccion1.style.backgroundColor = '#58cc02';
    });


    // botn 2 de la seccion 1
    var boton2seccion1 = document.createElement('button');
    boton2seccion1.style.width= '325px'; //331
    boton2seccion1.style.height = '52px'; //54
    boton2seccion1.style.position = 'absolute';
    boton2seccion1.style.right = '23.4%'; //23.5
    boton2seccion1.style.top = '61%'; //60
    boton2seccion1.style.borderRadius = '12px';
    boton2seccion1.textContent = 'YA TENGO UNA CUENTA';
    boton2seccion1.style.fontSize = '15px';
    boton2seccion1.style.fontWeight = "bolder";
    boton2seccion1.style.color = '#199EDD';
    boton2seccion1.style.backgroundColor = '#FFFFFF';
    boton2seccion1.style.border = 'none';
    //borde de bt2
    var boton2seccion1borde = document.createElement('button');
    //boton2seccion1borde.appendChild(boton2seccion1);
    boton2seccion1borde.style.width= '329px'; //331
    boton2seccion1borde.style.height = '58px';  //54
    boton2seccion1borde.style.position = 'absolute';
    boton2seccion1borde.style.right = '23.3%';
    boton2seccion1borde.style.top = '60.7%'; //60.8
    boton2seccion1borde.style.borderRadius = '12px';
    boton2seccion1borde.style.backgroundColor = '#CECECE';
    boton2seccion1borde.style.border = 'none';
    //funcion del boton 2
    boton2seccion1.addEventListener("mouseover", function() {
        boton2seccion1.style.backgroundColor = '#E5E5E5';
    });
    boton2seccion1.addEventListener("mouseleave", function() {
        boton2seccion1.style.backgroundColor = '#FFFFFF';
    });

    ////////

    //imagen primer texto
    var imgtexto1 = new Image();
    imgtexto1.src= 'src/imgtexto1.svg';
    imgtexto1.style.width = '460px'; //400
    imgtexto1.style.height = '100%';
    imgtexto1.style.marginLeft = '0';
    imgtexto1.style.padding = '0';
    //añadir imagen
    divPrimerTexto.appendChild(imgtexto1);

    // Añadir el nodo de texto al div
    divPrimerTexto.appendChild(texto1);

    // añadir el texto 2
    texto1.parentNode.insertBefore(texto2, texto1.nextSibling);

    // añadir primer boton
    texto2.parentNode.insertBefore(boton1seccion1borde, texto2.nextSibling);
    //añadir segundo boton
    boton1seccion1borde.parentNode.insertBefore(boton2seccion1borde, boton1seccion1borde.nextSibling);
    boton2seccion1borde.parentNode.insertBefore(boton2seccion1, boton2seccion1borde.nextSibling);
    boton2seccion1.parentNode.insertBefore(boton1seccion1, boton2seccion1.nextSibling);

    //nav 2
    var nav2 = document.createElement('div');
    divPrimerTexto.parentNode.insertBefore(nav2, divPrimerTexto.nextSibling);
    nav2.style.backgroundColor = 'red'; //transparent
    nav2.style.marginTop = '3.5%';
    nav2.style.width = '100%';
    nav2.style.height = '80px';
    nav2.style.padding = '0';
    nav2.style.paddingLeft = '0';
    nav2.style.paddingRight = '0';
    nav2.style.border = '7px';

    // segunda seccion ////////////////////
    var divSeccion2 = document.createElement('div');
    nav2.parentNode.insertBefore(divSeccion2, nav2.nextSibling);
    divSeccion2.style.width = '100%';
    divSeccion2.style.height = '700px';
    divSeccion2.style.padding = '0';

    var divtexto1s2 = document.createElement('div');
    divSeccion2.appendChild(divtexto1s2);

    divtexto1s2.style.width='1010px';
    divtexto1s2.style.height='370px';
    divtexto1s2.style.position = 'relative';
    divtexto1s2.style.marginLeft = '17.2%';
    divtexto1s2.style.top = '29.5%';

    var text1s2 = document.createElement('div');
    divtexto1s2.appendChild(text1s2);
    text1s2.style.width = '600px';
    text1s2.style.height = '300px';
    text1s2.textContent = 'divertido, efectivo y gratis';
    text1s2.style.fontWeight = "bolder";
    text1s2.style.color = '#58cc02';
    text1s2.style.fontSize = '55px';
    text1s2.style.marginTop = '10%';
    text1s2.style.position = 'relative';
    text1s2.style.fontFamily = 'feather, sans-serif';

    var text2s2 = document.createElement('div');
    text1s2.appendChild(text2s2);
    text2s2.style.width = '520px';
    text2s2.style.height = '200';
    text2s2.style.lineHeight = '20px';
    text2s2.textContent = 'Aprender con Duolingo es divertido y los estudios demuestran que funciona. ¡En nuestras lecciones cortas ganarás puntos y habilitarás nuevas unidades al mismo tiempo que desarrollas tus habilidades de comunicación en la vida real!';
    text2s2.style.fontSize = '17px';
    text2s2.style.color = '#777777';
    text2s2.style.marginTop = '3%';

    var imgtexto2 = new Image();
    imgtexto2.src= 'src/imagen2.svg';
    imgtexto2.style.width = '600px'; //400
    imgtexto2.style.height = 'auto';
    imgtexto2.style.right = '50%';
    imgtexto2.style.padding = '0';
    imgtexto2.style.float = 'right';
    imgtexto2.style.marginTop = '-500px';
    imgtexto2.style.marginRight = '-100px';
    //añadir imagen
    divtexto1s2.appendChild(imgtexto2)

    // tercera seccion//////////////////////////////////////////////////////////

    // Crear el segundo div con el formato invertido
    var divtexto2s2 = document.createElement('div');
    divSeccion2.appendChild(divtexto2s2);

    divtexto2s2.style.width = '1010px';
    divtexto2s2.style.height = '370px';
    divtexto2s2.style.position = 'relative';
    divtexto2s2.style.marginLeft = '25%';
    divtexto2s2.style.marginTop = '10%';
    divtexto2s2.style.top = '29.5%';

    // Crear el segundo texto
    var text1s2_2 = document.createElement('div');
    divtexto2s2.appendChild(text1s2_2);
    text1s2_2.style.width = '600px';
    text1s2_2.style.height = '300px';
    text1s2_2.textContent = 'respaldado por la ciencia';
    text1s2_2.style.fontWeight = "bolder";
    text1s2_2.style.color = '#58cc02';
    text1s2_2.style.fontSize = '55px';
    text1s2_2.style.marginTop = '10%';
    text1s2_2.style.position = 'relative';
    text1s2_2.style.fontFamily = 'feather, sans-serif';
    text1s2_2.style.float = 'right';  // Flotar el texto a la derecha
    text1s2_2.style.marginRight = '20px';  // Ajustar la separación entre la imagen y el texto

    //otro texto
    var text2s2_2 = document.createElement('div');
    text1s2_2.appendChild(text2s2_2);
    text2s2_2.style.width = '520px';
    text2s2_2.style.height = '200';
    text2s2_2.style.lineHeight = '20px';
    text2s2_2.textContent = 'Gracias a la combinación de métodos de enseñanza respaldados por la ciencia y un contenido entretenido, creamos cursos que enseñan de forma eficiente a leer, escribir, entender y hablar en otros idiomas.';
    text2s2_2.style.fontSize = '17px';
    text2s2_2.style.color = '#777777';
    text2s2_2.style.marginTop = '3%';

    // Crear la segunda imagen con formato invertido
    var imgtexto2_2 = new Image();
    imgtexto2_2.src = 'src/imagen3.svg';
    imgtexto2_2.style.width = '550px'; // Ajusta el valor según tus necesidades
    imgtexto2_2.style.height = 'auto';
    imgtexto2_2.style.left = '50%';
    imgtexto2_2.style.padding = '0';
    imgtexto2_2.style.float = 'right';
    imgtexto2_2.style.marginTop = '-450px';
    imgtexto2_2.style.marginRight = '700px';

    divtexto2s2.appendChild(imgtexto2_2);

    // cuarta seccion /////////////////////////////

    // Crear el div con el formato invertido
    var divtexto3s2 = document.createElement('div');
    divSeccion2.appendChild(divtexto3s2);

    divtexto3s2.style.width = '1010px';
    divtexto3s2.style.height = '370px';
    divtexto3s2.style.position = 'relative';
    divtexto3s2.style.marginLeft = '13.5%';
    divtexto3s2.style.marginTop = '10%';
    divtexto3s2.style.top = '29.5%';

    // Crear el primer texto
    var text1s2_3 = document.createElement('div');
    divtexto3s2.appendChild(text1s2_3);
    text1s2_3.style.width = '400px';
    text1s2_3.style.height = '300px';
    text1s2_3.textContent = 'mantén tu motivación';
    text1s2_3.style.fontWeight = 'bolder';
    text1s2_3.style.color = '#58cc02';
    text1s2_3.style.fontSize = '55px';
    text1s2_3.style.marginTop = '10%';
    text1s2_3.style.position = 'relative';
    text1s2_3.style.fontFamily = 'feather, sans-serif';
    text1s2_3.style.float = 'left';  // Flotar el texto a la izquierda
    text1s2_3.style.marginRight = '20px';  // Ajustar la separación entre el texto y la imagen

    // Crear el segundo texto
    var text2s2_3 = document.createElement('div');
    text1s2_3.appendChild(text2s2_3);
    text2s2_3.style.width = '520px';
    text2s2_3.style.height = '200';
    text2s2_3.style.lineHeight = '20px';
    text2s2_3.textContent = 'Nuestras funcionalidades y desafíos son divertidos y hacen que aprender se sienta como un juego. ¡Vas a poder formar un hábito de aprendizaje sin esfuerzo! Y, por supuesto, recibirás recordatorios de nuestra adorable mascota, Duo, el búho.';
    text2s2_3.style.fontSize = '17px';
    text2s2_3.style.color = '#777777';
    text2s2_3.style.marginTop = '3%';

    // Crear la imagen
    var imgtexto2_3 = new Image();
    imgtexto2_3.src = 'src/imagen4.svg';
    imgtexto2_3.style.width = '550px';
    imgtexto2_3.style.height = 'auto';
    imgtexto2_3.style.float = 'right';
    imgtexto2_3.style.marginTop = '-50px';
    imgtexto2_3.style.marginRight = '-20px';

    divtexto3s2.appendChild(imgtexto2_3);

    //seccion 5 ///////////
    // Crear el segundo div
    var divTexto4s2 = document.createElement('div');
    divSeccion2.appendChild(divTexto4s2);

    divTexto4s2.style.width = '1010px';
    divTexto4s2.style.height = '370px';
    divTexto4s2.style.position = 'relative';
    divTexto4s2.style.marginLeft = '13.5%';
    divTexto4s2.style.marginTop = '15%';
    divTexto4s2.style.top = '29.5%';

    // Crear la imagen del segundo div
    var imgTexto2_4 = new Image();
    imgTexto2_4.src = 'src/imagen5.svg'; // Cambia la ruta de la imagen según sea necesario
    imgTexto2_4.style.width = '550px';
    imgTexto2_4.style.height = 'auto';
    imgTexto2_4.style.float = 'left'; // Cambiada la dirección del flotante
    imgTexto2_4.style.marginTop = '-50px';
    imgTexto2_4.style.marginRight = '20px'; // Ajuste en el margen derecho

    divTexto4s2.appendChild(imgTexto2_4);

    // Crear el primer texto del segundo div
    var text1s2_4 = document.createElement('div');
    divTexto4s2.appendChild(text1s2_4);
    text1s2_4.style.width = '400px';
    text1s2_4.style.height = '300px';
    text1s2_4.textContent = 'aprendizaje personalizado';
    text1s2_4.style.fontWeight = 'bolder';
    text1s2_4.style.color = '#58cc02';
    text1s2_4.style.fontSize = '55px';
    text1s2_4.style.marginTop = '10%';
    text1s2_4.style.position = 'relative';
    text1s2_4.style.fontFamily = 'feather, sans-serif';
    text1s2_4.style.float = 'right'; // Cambiada la dirección del flotante
    text1s2_4.style.marginRight = '20px'; // Ajuste en el margen derecho

    // Crear el segundo texto del segundo div
    var text2s2_4 = document.createElement('div');
    text1s2_4.appendChild(text2s2_4);
    text2s2_4.style.width = '520px';
    text2s2_4.style.height = '200px';
    text2s2_4.style.lineHeight = '20px';
    text2s2_4.textContent = 'Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan según tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.';
    text2s2_4.style.fontSize = '17px';
    text2s2_4.style.color = '#777777';
    text2s2_4.style.marginTop = '3%';

    // seccion cambio de color

    var divcolor = document.createElement('div');
    divTexto4s2.parentNode.insertBefore(divcolor, divTexto4s2.nextSibling);

    divcolor.style.width = '100%';
    divcolor.style.height = '2000px';
    divcolor.style.backgroundColor = '#DDF4FF';
    divcolor.style.marginTop= '20%';

    var textocolor = document.createElement('div');
    divcolor.appendChild(textocolor);
    textocolor.textContent= 'aprende cuando quieras y donde quieras';
    textocolor.style.textAlign = 'center';
    textocolor.style.width = '600px';
    textocolor.style.height = 'auto';
    textocolor.style.fontSize = '70px';
    textocolor.style.fontWeight = "bolder";
    textocolor.style.color = "#042C60";
    textocolor.style.top = '-20%';
    textocolor.style.padding = '0';

    //siguiente seccion

    var superdiv = document.createElement('div');
    divcolor.parentNode.insertBefore(superdiv, divcolor.nextSibling);

    superdiv.style.width='100%',
    superdiv.style.height='1000px';
    superdiv.style.margin = '0';
    superdiv.style.padding = '0';
    superdiv.style.backgroundColor = '#100F3E';
    // Crear el elemento de imagen
    var imagen = document.createElement('img');
    imagen.style.height = '570px';
    imagen.style.width = 'auto';
    imagen.style.marginLeft = '15%';

    // Establecer la ruta de la imagen
    imagen.src = 'src/imagensuper.svg';

    // Agregar la imagen como hijo al div
    superdiv.appendChild(imagen);

    var imagen2 = document.createElement('img');
    superdiv.appendChild(imagen2);
    imagen2.src = 'src/superboton.PNG';
    imagen2.style.height = '100px';
    imagen2.style.width = 'auto';
    imagen2.style.marginLeft = '35%';





    


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