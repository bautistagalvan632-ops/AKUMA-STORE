const MI_WHATSAPP = "5491138508796"; 

// CONFIGURACIÓN DE SEGURIDAD
const PASSWORD_ADMIN = "akuma2026";

let isAdminMode = false;

// MEGACATÁLOGO BASE EXCLUSIVO DE JUEGOS DE PS4
const catálogoBase = [
    // --- DEPORTES Y CARRERAS PS4 ---
    { titulo: "EA Sports FC 26", plataforma: "ps4", precio: "29.99", imagen: "https://unsplash.com" },
    { titulo: "EA Sports FC 25", plataforma: "ps4", precio: "15.00", imagen: "https://unsplash.com" },
    { titulo: "EA Sports FC 24", plataforma: "ps4", precio: "10.00", imagen: "https://unsplash.com" },
    { titulo: "FIFA 23", plataforma: "ps4", precio: "8.00", imagen: "https://unsplash.com" },
    { titulo: "eFootball Coin Pack", plataforma: "ps4", precio: "12.00", imagen: "https://unsplash.com" },
    { titulo: "NBA 2K26", plataforma: "ps4", precio: "29.99", imagen: "https://unsplash.com" },
    { titulo: "NBA 2K25", plataforma: "ps4", precio: "14.99", imagen: "https://unsplash.com" },
    { titulo: "Crash Team Racing Nitro-Fueled", plataforma: "ps4", precio: "15.00", imagen: "https://unsplash.com" },
    { titulo: "Gran Turismo Sport", plataforma: "ps4", precio: "12.00", imagen: "https://unsplash.com" },
    { titulo: "Need for Speed Heat", plataforma: "ps4", precio: "11.00", imagen: "https://unsplash.com" },
    { titulo: "F1 24", plataforma: "ps4", precio: "25.00", imagen: "https://unsplash.com" },

    // --- ACCIÓN Y MUNDO ABIERTO PS4 ---
    { titulo: "Grand Theft Auto V", plataforma: "ps4", precio: "15.00", imagen: "https://unsplash.com" },
    { titulo: "Red Dead Redemption 2", plataforma: "ps4", precio: "18.00", imagen: "https://unsplash.com" },
    { titulo: "Call of Duty: Black Ops 6", plataforma: "ps4", precio: "39.99", imagen: "https://unsplash.com" },
    { titulo: "Call of Duty: Modern Warfare 3", plataforma: "ps4", precio: "25.00", imagen: "https://unsplash.com" },
    { titulo: "Marvel's Spider-Man", plataforma: "ps4", precio: "14.00", imagen: "https://unsplash.com" },
    { titulo: "Marvel's Spider-Man: Miles Morales", plataforma: "ps4", precio: "18.00", imagen: "https://unsplash.com" },
    { titulo: "Ghost of Tsushima Director's Cut", plataforma: "ps4", precio: "22.50", imagen: "https://unsplash.com" },
    { titulo: "Assassin's Creed Valhalla", plataforma: "ps4", precio: "15.00", imagen: "https://unsplash.com" },
    { titulo: "Assassin's Creed Mirage", plataforma: "ps4", precio: "20.00", imagen: "https://unsplash.com" },
    { titulo: "Cyberpunk 2077", plataforma: "ps4", precio: "16.00", imagen: "https://unsplash.com" },
    { titulo: "Horizon Zero Dawn Complete", plataforma: "ps4", precio: "9.99", imagen: "https://unsplash.com" },
    { titulo: "Horizon Forbidden West", plataforma: "ps4", precio: "19.99", imagen: "https://unsplash.com" },

    // --- AVENTURA E HISTORIA PS4 ---
    { titulo: "God of War (2018)", plataforma: "ps4", precio: "10.00", imagen: "https://unsplash.com" },
    { titulo: "God of War Ragnarök", plataforma: "ps4", precio: "25.00", imagen: "https://unsplash.com" },
    { titulo: "The Last of Us Remastered", plataforma: "ps4", precio: "8.50", imagen: "https://unsplash.com" },
    { titulo: "The Last of Us Part II", plataforma: "ps4", precio: "18.00", imagen: "https://unsplash.com" },
    { titulo: "Uncharted: The Nathan Drake Collection", plataforma: "ps4", precio: "10.00", imagen: "https://unsplash.com" },
    { titulo: "Uncharted 4: A Thief's End", plataforma: "ps4", precio: "12.00", imagen: "https://unsplash.com" },
    { titulo: "Elden Ring", plataforma: "ps4", precio: "32.00", imagen: "https://unsplash.com" },
    { titulo: "Hogwarts Legacy", plataforma: "ps4", precio: "28.00", imagen: "https://unsplash.com" },
    { titulo: "The Witcher 3: Wild Hunt Complete", plataforma: "ps4", precio: "12.00", imagen: "https://unsplash.com" },

    // --- TERROR Y LUCHA PS4 ---
    { titulo: "Resident Evil 4 Remake", plataforma: "ps4", precio: "24.99", imagen: "https://unsplash.com" },
    { titulo: "Resident Evil 7: Biohazard", plataforma: "ps4", precio: "10.00", imagen: "https://unsplash.com" },
    { titulo: "Resident Evil Village", plataforma: "ps4", precio: "16.00", imagen: "https://unsplash.com" },
    { titulo: "Mortal Kombat 11 Ultimate", plataforma: "ps4", precio: "12.00", imagen: "https://unsplash.com" },
    { titulo: "Mortal Kombat XL", plataforma: "ps4", precio: "8.00", imagen: "https://unsplash.com" },
    { titulo: "Dragon Ball FighterZ", plataforma: "ps4", precio: "10.00", imagen: "https://unsplash.com" },
    { titulo: "Dragon Ball Xenoverse 2", plataforma: "ps4", precio: "12.00", imagen: "https://unsplash.com" },
    { titulo: "Naruto Shippuden: Ultimate Ninja STORM 4", plataforma: "ps4", precio: "9.00", imagen: "https://unsplash.com" },

    // --- FAMILIARES Y SIMULACIÓN PS4 ---
    { titulo: "Minecraft", plataforma: "ps4", precio: "14.50", imagen: "https://unsplash.com" },
    { titulo: "It Takes Two", plataforma: "ps4", precio: "16.00", imagen: "https://unsplash.com" },
    { titulo: "Crash Bandicoot N. Sane Trilogy", plataforma: "ps4", precio: "15.00", imagen: "https://unsplash.com" },
    { titulo: "Crash Bandicoot 4: It's About Time", plataforma: "ps4", precio: "20.00", imagen: "https://unsplash.com" },
    { titulo: "Stray", plataforma: "ps4", precio: "11.99", imagen: "https://unsplash.com" },
    { titulo: "The Sims 4 Packs Integrados", plataforma: "ps4", precio: "18.00", imagen: "https://unsplash.com" },
    { titulo: "Lego Marvel Super Heroes 2", plataforma: "ps4", precio: "10.00", imagen: "https://unsplash.com" }
];

let juegos = JSON.parse(localStorage.getItem('akuma_catalog')) || catálogoBase;

const catalogContainer = document.getElementById('catalog');
const searchInput = document.getElementById('search');
const platformSelect = document.getElementById('filter-platform');

function mostrarJuegos(lista) {
    catalogContainer.innerHTML = "";
    if(lista.length === 0) {
        catalogContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888; font-size: 1.2rem;">No encontramos ese título en Akuma Store.</p>`;
        return;
    }
    lista.forEach((juego, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${juego.imagen || 'https://placehold.co'}" alt="${juego.titulo}">
            <div class="card-content">
                <span class="platform-badge badge-${juego.plataforma}">${juego.plataforma}</span>
                <h3>${juego.titulo}</h3>
                <div class="price">USD $${juego.precio}</div>
                <button class="btn-buy" onclick="comprarJuego('${juego.titulo}', '${juego.plataforma.toUpperCase()}')">Comprar</button>
                <button class="btn-delete" id="del-${index}" onclick="eliminarJuego(${index})">❌ Eliminar Juego</button>
            </div>
        `;
        catalogContainer.appendChild(card);
        
        if (isAdminMode) {
            document.getElementById(`del-${index}`).style.display = 'block';
        }
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

function comprarJuego(titulo, plataforma) {
    const mensaje = encodeURIComponent(`¡quiero compra este juego!: ${titulo} para ${plataforma}`);
    window.open(`https://wa.me{MI_WHATSAPP}?text=${mensaje}`, '_blank');
}

function loginAdmin() {
    const intento = prompt("Introduce la clave maestra de Akuma Store:");
