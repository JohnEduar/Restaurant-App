document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#restaurantes');
    if (!container) return;

    let restaurantes = JSON.parse(localStorage.getItem('restaurantes')) || [];

    // Obtener las tarjetas fijas del HTML
    const tarjetasFijas = container.querySelectorAll('[data-fijo="true"]');

    // Solo cargar las tarjetas fijas al localStorage si está vacío
    if (restaurantes.length === 0) {
        tarjetasFijas.forEach(card => {
            const nombre = card.querySelector('.nombre-rest')?.textContent.trim() || '';
            const direccion = card.querySelector('.direcciones')?.textContent.trim() || '';
            const descripcion = card.querySelector('.descripcion-rest')?.textContent.trim() || '';
            const imagen = card.querySelector('img')?.getAttribute('src') || '';

            restaurantes.push({ nombre, direccion, descripcion, imagen });
        });

        // Guardar en localStorage
        localStorage.setItem('restaurantes', JSON.stringify(restaurantes));
    }

    // Eliminar solo las tarjetas dinámicas anteriores (para evitar duplicados visuales)
    container.querySelectorAll('[data-dinamico="true"]').forEach(el => el.remove());

    // Renderizar las tarjetas dinámicas (no las fijas)
    const tarjetasFijasNombres = Array.from(tarjetasFijas).map(card =>
        card.querySelector('.nombre-rest')?.textContent.trim()
    );

    restaurantes.forEach(r => {
        if (!tarjetasFijasNombres.includes(r.nombre)) {
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
        }
    });
});
