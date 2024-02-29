document.addEventListener('DOMContentLoaded', function() {
    // Crear un nuevo div
    var nuevoDiv = document.createElement('div');

    // Configurar atributos o contenido (opcional)
    nuevoDiv.id = 'menu-principal';
    nuevoDiv.style.width = '1519px';
    nuevoDiv.style.height = '703';
    nuevoDiv.style.backgroundColor = 'red';
    nuevoDiv.textContent = 'menu';

    // Agregar el nuevo div al cuerpo del documento
    document.body.appendChild(nuevoDiv);
});
