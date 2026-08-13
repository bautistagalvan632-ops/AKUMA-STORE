// Configuración de contacto de Akuma Store
const MI_WHATSAPP = "5491138508796"; 

// MEGAPACK DE JUEGOS MASIVOS DE AKUMA STORE
const juegos = [
    // --- DEPORTES Y CARRERAS ---
    { titulo: "EA Sports FC 26", plataforma: "ps5", precio: "39.99", imagen: "https://unsplash.com" },
    { titulo: "EA Sports FC 26", plataforma: "ps4", precio: "29.99", imagen: "https://unsplash.com" },
    { titulo: "eFootball 2026 Coin Pack", plataforma: "ps4", precio: "12.50", imagen: "https://unsplash.com" },
    { titulo: "NBA 2K26", plataforma: "ps5", precio: "35.00", imagen: "https://unsplash.com" },
    { titulo: "Gran Turismo 7", plataforma: "ps5", precio: "34.99", imagen: "https://unsplash.com" },

    // --- ACCIÓN, MUNDO ABIERTO Y SHOOTERS ---
    { titulo: "Grand Theft Auto V", plataforma: "ps4", precio: "15.00", imagen: "https://unsplash.com" },
    { titulo: "Grand Theft Auto V", plataforma: "ps5", precio: "19.99", imagen: "https://unsplash.com" },
    { titulo: "Red Dead Redemption 2", plataforma: "ps4", precio: "18.00", imagen: "https://unsplash.com" },
    { titulo: "Marvel's Spider-Man 2", plataforma: "ps5", precio: "45.00", imagen: "https://unsplash.com" },
    { titulo: "Marvel's Wolverine", plataforma: "ps5", precio: "59.99", imagen: "https://unsplash.com" },
    { titulo: "Ghost of Yōtei", plataforma: "ps5", precio: "55.00", imagen: "https://unsplash.com" },
    { titulo: "Ghost of Tsushima", plataforma: "ps4", precio: "22.50", imagen: "https://unsplash.com" },
    { titulo: "Call of Duty: Black Ops 6", plataforma: "ps5", precio: "49.99", imagen: "https://unsplash.com" },
    { titulo: "Call of Duty: Black Ops 6", plataforma: "ps4", precio: "39.99", imagen: "https://unsplash.com" },
    { titulo: "Cyberpunk 2077 Ultimate", plataforma: "ps5", precio: "28.00", imagen: "https://unsplash.com" },

    // --- AVENTURA, ACCIÓN RPG Y EXCLUSIVOS ---
    { titulo: "God of War Ragnarök", plataforma: "ps5", precio: "35.00", imagen: "https://unsplash.com" },
    { titulo: "God of War Ragnarök", plataforma: "ps4", precio: "25.00", imagen: "https://unsplash.com" },
    { titulo: "Elden Ring + Shadow of the Erdtree", plataforma: "ps5", precio: "49.99", imagen: "https://unsplash.com" },
    { titulo: "Black Myth: Wukong", plataforma: "ps5", precio: "42.00", imagen: "https://unsplash.com" },
    { titulo: "The Last of Us Part I", plataforma: "ps5", precio: "32.00", imagen: "https://unsplash.com" },
    { titulo: "The Last of Us Part II Remastered", plataforma: "ps5", precio: "29.99", imagen: "https://unsplash.com" },
    { titulo: "Horizon Forbidden West", plataforma: "ps4", precio: "19.99", imagen: "https://unsplash.com" },

    // --- TERROR, LUCHA Y FAMILIARES ---
    { titulo: "Resident Evil 4 Remake", plataforma: "ps5", precio: "29.99", imagen: "https://unsplash.com" },
    { titulo: "Mortal Kombat 1", plataforma: "ps5", precio: "34.99", imagen: "https://unsplash.com" },
    { titulo: "Dragon Ball Xenoverse 2", plataforma: "ps4", precio: "12.00", imagen: "https://unsplash.com" },
    { titulo: "Minecraft", plataforma: "ps4", precio: "14.50", imagen: "https://unsplash.com" },
    { titulo: "It Takes Two", plataforma: "ps4", precio: "16.00", imagen: "https://unsplash.com" },
    { titulo: "Hogwarts Legacy", plataforma: "ps5", precio: "38.00", imagen: "https://unsplash.com" },
    { titulo: "Hogwarts Legacy", plataforma: "ps4", precio: "28.00", imagen: "https://unsplash.com" },
    { titulo: "Stray", plataforma: "ps4", precio: "11.99", imagen: "https://unsplash.com" }
];

const catalogContainer = document.getElementById('catalog');
const searchInput = document.getElementById('search');
const platformSelect = document.getElementById('filter-platform');

function mostrarJuegos(lista) {
    catalogContainer.innerHTML = "";
    if(lista.length === 0) {
        catalogContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888; font-size: 1.2rem;">No encontramos ese título en Akuma Store.</p>`;
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
                <div class="price">USD $${juego.precio}</div>
                <!-- El texto del botón ahora dice estrictamente Comprar -->
                <button class="btn-buy" onclick="comprarJuego('${juego.titulo}', '${juego.plataforma.toUpperCase()}')">Comprar</button>
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

// Envía al chat directo con tu mensaje personalizado y los detalles del juego elegido
function comprarJuego(titulo, plataforma) {
    const mensaje = encodeURIComponent(`¡quiero compra este juego!: ${titulo} para ${plataforma}`);
    window.open(`https://wa.me{MI_WHATSAPP}?text=${mensaje}`, '_blank');
}

searchInput.addEventListener('input', filtrarCatálogo);
platformSelect.addEventListener('change', filtrarCatálogo);
mostrarJuegos(juegos);
