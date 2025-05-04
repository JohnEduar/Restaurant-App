document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-restaurant-form');

    if (!form) {
        console.error('No se encontró el formulario con id "add-restaurant-form".');
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('restaurant-name').value.trim();
        const descripcion = document.getElementById('restaurant-description').value.trim();
        const direccion = document.getElementById('restaurant-address').value.trim();
        const imagen = document.getElementById('restaurant-image').value.trim();

        if (!nombre || !descripcion || !direccion || !imagen) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        const nuevoRestaurante = {
            nombre,
            descripcion,
            direccion,
            imagen
        };

        const restaurantes = JSON.parse(localStorage.getItem('restaurantes')) || [];
        restaurantes.push(nuevoRestaurante);
        localStorage.setItem('restaurantes', JSON.stringify(restaurantes));

        alert('✅ Restaurante agregado exitosamente.');
        window.location.href = 'index.html';
    });
});
