document.addEventListener('DOMContentLoaded', function() {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');

    // Configurar atributos o contenido (opcional)
    nuevoDiv.id = 'menu-principal';
    nuevoDiv.style.width = '300px';
    nuevoDiv.style.backgroundColor = 'red';
    nuevoDiv.textContent = 'menu';

    // Agregar el nuevo div al cuerpo del documento
    document.body.appendChild(nuevoDiv);
});
