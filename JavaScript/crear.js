document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-restaurant-form');

    if (!form) {
        console.error('No se encontró el formulario con id "add-restaurant-form".');
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById('restaurant-name').value.trim();
        const descripcion = document.getElementById('restaurant-description').value.trim();
        const direccion = document.getElementById('restaurant-address').value.trim();
        const imagen = document.getElementById('restaurant-image').value.trim();

        // Validación simple
        if (!nombre || !descripcion || !direccion || !imagen) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        // Crear objeto restaurante
        const nuevoRestaurante = {
            nombre,
            descripcion,
            direccion,
            imagen
        };

        // Obtener la lista actual de restaurantes desde localStorage
        const restaurantes = JSON.parse(localStorage.getItem('restaurantes')) || [];

        // Agregar el nuevo restaurante
        restaurantes.push(nuevoRestaurante);

        // Guardar la lista actualizada en localStorage
        localStorage.setItem('restaurantes', JSON.stringify(restaurantes));

        alert('Restaurante agregado exitosamente.');

        // Redirigir al inicio
        window.location.href = 'index.html';
    });
});