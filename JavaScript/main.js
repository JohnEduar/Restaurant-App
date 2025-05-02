document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#restaurantes');

    if (!container) {
        console.error("No se encontró el contenedor con id 'restaurantes'");
        return;
    }

    // Eliminar solo los elementos dinámicos previos (si los hay)
    container.querySelectorAll('[data-dinamico="true"]').forEach(el => el.remove());

    // Cargar desde localStorage
    const restaurantes = JSON.parse(localStorage.getItem('restaurantes')) || [];

    // Renderizar los restaurantes almacenados
    restaurantes.forEach(r => {
        const card = document.createElement('article');
        card.className = 'card';
        card.setAttribute('data-dinamico', 'true');
        card.innerHTML = `
            <img src="${r.imagen}" width="300" alt="${r.nombre}">
            <div class="info">
                <h2 class="nombre-rest">${r.nombre}</h2>
                <h4 class="direcciones">${r.direccion}</h4>
                <p class="descripcion-rest">${r.descripcion}</p>
            </div>
        `;
        container.appendChild(card);
    });
});
