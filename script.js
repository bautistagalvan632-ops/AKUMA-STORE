// Tu número de WhatsApp de Akuma Store configurado correctamente
const MI_WHATSAPP = "5491138508796"; 

// Catálogo inicial de juegos de Akuma Store (Modifica los títulos y precios aquí)
const juegos = [
    {
        titulo: "EA Sports FC 26",
        plataforma: "ps5",
        precio: "39.99",
        imagen: "https://placehold.co"
    },
    {
        titulo: "Grand Theft Auto V",
        plataforma: "ps4",
        precio: "19.99",
        imagen: "https://placehold.co"
    },
    {
        titulo: "Spider-Man 2",
        plataforma: "ps5",
        precio: "49.99",
        imagen: "https://placehold.co"
    },
    {
        titulo: "God of War Ragnarök",
        plataforma: "ps4",
        precio: "29.99",
        imagen: "https://placehold.co"
    }
];

const catalogContainer = document.getElementById('catalog');
const searchInput = document.getElementById('search');
const platformSelect = document.getElementById('filter-platform');

function mostrarJuegos(lista) {
    catalogContainer.innerHTML = "";
    
    if(lista.length === 0) {
        catalogContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666;">No encontramos ese título en el catálogo.</p>`;
        return;
    }

    lista.forEach(juego => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.titulo}">
            <div class="card-content">
                <span class="platform-badge badge-${juego.plataforma}">${juego.plataforma}</span>
                <h3>${juego.titulo}</h3>
                <div class="price">$${juego.precio}</div>
                <button class="btn-buy" onclick="comprarJuego('${juego.titulo}', '${juego.plataforma.toUpperCase()}')">Comprar por WhatsApp</button>
            </div>
        `;
        catalogContainer.appendChild(card);
    });
}

function filtrarCatálogo() {
    const textoBuscar = searchInput.value.toLowerCase();
    const plataformaElegida = platformSelect.value;

    const juegosFiltrados = juegos.filter(juego => {
        const coincideTexto = juego.titulo.toLowerCase().includes(textoBuscar);
        const coincidePlataforma = plataformaElegida === 'all' || juego.plataforma === plataformaElegida;
        return coincideTexto && coincidePlataforma;
    });

    mostrarJuegos(juegosFiltrados);
}

// Redirección directa a tu WhatsApp con mensaje personalizado de Akuma Store
function comprarJuego(titulo, plataforma) {
    const mensaje = encodeURIComponent(`¡Hola Akuma Store! Me interesa adquirir el juego digital de ${titulo} para ${plataforma}. ¿Me indican los pasos para concretar la compra?`);
    window.open(`https://wa.me{MI_WHATSAPP}?text=${mensaje}`, '_blank');
}

searchInput.addEventListener('input', filtrarCatálogo);
platformSelect.addEventListener('change', filtrarCatálogo);

mostrarJuegos(juegos);
