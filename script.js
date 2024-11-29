// Simula datos obtenidos del servidor
const articulos = [
    { id: 1, nombre: "Laptop", descripcion: "Laptop de alta gama", precio: 1500.00, stock: 10 },
    { id: 2, nombre: "Mouse", descripcion: "Mouse inalámbrico", precio: 25.99, stock: 50 },
    // Agrega el resto de los artículos aquí...
];

// Renderizar la lista de artículos en la página
const renderArticulos = () => {
    const contenedor = document.getElementById('lista-articulos');
    contenedor.innerHTML = '';
    articulos.forEach(articulo => {
        contenedor.innerHTML += `
            <div class="articulo">
                <h3>${articulo.nombre}</h3>
                <p>${articulo.descripcion}</p>
                <p>Precio: $${articulo.precio.toFixed(2)}</p>
                <p>Stock: ${articulo.stock}</p>
            </div>
        `;
    });
};

// Inicializa el script
document.addEventListener('DOMContentLoaded', renderArticulos);