document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input');
    const button = document.getElementById('button-addon2');
    const resultadoContainer = document.getElementById('resultados-busqueda');
  
    button.addEventListener('click', () => {
      const query = input.value.toLowerCase();
      const restaurantes = JSON.parse(localStorage.getItem('restaurantes')) || [];
  
      resultadoContainer.innerHTML = ''; // Limpiar resultados anteriores
  
      const encontrados = restaurantes.filter(r =>
        r.nombre.toLowerCase().includes(query)
      );
  
      if (encontrados.length === 0) {
        resultadoContainer.innerHTML = '<p>No se encontraron resultados.</p>';
      }
  
      encontrados.forEach(r => {
        const card = document.createElement('div');
        card.className = 'card-busqueda';
        card.innerHTML = `
          <img src="${r.imagen}" alt="Imagen">
          <div class="card-body">
            <h2 class="nombre-rest">${r.nombre}</h2>
            <h4 class="direcciones">${r.direccion}</h4>
            <p>${r.descripcion}</p>
          </div>
        `;
        resultadoContainer.appendChild(card);
      });
    });
  });
  