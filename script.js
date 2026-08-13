const MI_WHATSAPP = "5491138508796"; 

// CONFIGURACIÓN DE SEGURIDAD (Cambia tu contraseña aquí si quieres)
const PASSWORD_ADMIN = "akuma2026";

// Estado de la sesión del administrador
let isAdminMode = false;

// Catálogo base de respaldo
const catálogoBase = [
    { titulo: "EA Sports FC 26", plataforma: "ps5", precio: "39.99", imagen: "https://unsplash.com" },
    { titulo: "EA Sports FC 26", plataforma: "ps4", precio: "29.99", imagen: "https://unsplash.com" },
    { titulo: "Grand Theft Auto V", plataforma: "ps4", precio: "15.00", imagen: "https://unsplash.com" },
    { titulo: "Grand Theft Auto V", plataforma: "ps5", precio: "19.99", imagen: "https://unsplash.com" },
    { titulo: "Marvel's Spider-Man 2", plataforma: "ps5", precio: "45.00", imagen: "https://unsplash.com" },
    { titulo: "Call of Duty: Black Ops 6", plataforma: "ps5", precio: "49.99", imagen: "https://unsplash.com" },
    { titulo: "God of War Ragnarök", plataforma: "ps4", precio: "25.00", imagen: "https://unsplash.com" },
    { titulo: "Minecraft", plataforma: "ps4", precio: "14.50", imagen: "https://unsplash.com" }
];

// Cargar juegos desde el almacenamiento del navegador o usar el catálogo base
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
        
        // Mantener visibles los botones de borrado si estás logueado
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

// LÓGICA EXCLUSIVA ADMINISTRATIVA
function loginAdmin() {
    const intento = prompt("Introduce la clave maestra de Akuma Store:");
    if (intento === PASSWORD_ADMIN) {
        isAdminMode = true;
        document.getElementById('adminPanel').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        actualizarCodigoExportar();
        filtrarCatálogo(); // Refresca para mostrar los botones de borrado
    } else if (intento !== null) {
        alert("Clave incorrecta. Acceso denegado.");
    }
}

function cerrarAdmin() {
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function agregarJuegoManual() {
    const titulo = document.getElementById('new-title').value.trim();
    const plataforma = document.getElementById('new-platform').value;
    const precio = document.getElementById('new-price').value.trim();
    const imagen = document.getElementById('new-image').value.trim();

    if (!titulo || !precio) {
        alert("Por favor, introduce al menos el título y el precio.");
        return;
    }

    juegos.unshift({ titulo, plataforma, precio, imagen });
    guardarYRefrescar();
    
    // Limpiar formulario
    document.getElementById('new-title').value = '';
    document.getElementById('new-price').value = '';
    document.getElementById('new-image').value = '';
}

function eliminarJuego(index) {
    if (confirm(`¿Estás seguro de que quieres eliminar "${juegos[index].titulo}"?`)) {
        juegos.splice(index, 1);
        guardarYRefrescar();
    }
}

function guardarYRefrescar() {
    localStorage.setItem('akuma_catalog', JSON.stringify(juegos));
    filtrarCatálogo();
    actualizarCodigoExportar();
}

function actualizarCodigoExportar() {
    // Genera el código de la lista estructurada para copiar fácilmente
    const caja = document.getElementById('exportBox');
    caja.innerText = JSON.stringify(juegos, null, 4);
}

searchInput.addEventListener('input', filtrarCatálogo);
platformSelect.addEventListener('change', filtrarCatálogo);
mostrarJuegos(juegos);
