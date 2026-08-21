const WHATSAPP = "1138508796";

const defaultGames = [
    {
        id: 1,
        name: "God of War III",
        console: "PS3",
        price: 15000,
        status: "Destacado",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
    },

    {
        id: 2,
        name: "The Last of Us",
        console: "PS3",
        price: 18000,
        status: "Oferta",
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f"
    },

    {
        id: 3,
        name: "God of War",
        console: "PS4",
        price: 25000,
        status: "Nuevo",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f"
    },

    {
        id: 4,
        name: "Spider-Man",
        console: "PS4",
        price: 28000,
        status: "Destacado",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f"
    },

    {
        id: 5,
        name: "Spider-Man 2",
        console: "PS5",
        price: 40000,
        status: "Nuevo",
        image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e"
    },

    {
        id: 6,
        name: "EA Sports FC",
        console: "PS5",
        price: 35000,
        status: "Oferta",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55"
    }
];


function getGames() {

    const saved = localStorage.getItem("akumaGames");

    if (saved) {
        return JSON.parse(saved);
    }

    localStorage.setItem(
        "akumaGames",
        JSON.stringify(defaultGames)
    );

    return defaultGames;
}


function saveGames(games) {

    localStorage.setItem(
        "akumaGames",
        JSON.stringify(games)
    );

}


function money(value) {

    return "$" + Number(value).toLocaleString("es-AR");

}


    function whatsappLink(game) {
    return "https://wa.me/qr/6T47JUBLLYW5M1";
        const message =
        `Hola AKUMA STORE 👋 Quiero consultar por ${game.name} (${game.console}). Precio: ${money(game.price)}`;

}

}


function showGames(consoleFilter = "todos") {

    const container =
        document.getElementById("gamesContainer");

    if (!container) return;

    const games = getGames();

    let filtered = games;

    if (consoleFilter !== "todos") {

        filtered = games.filter(
            game => game.console === consoleFilter
        );

    }

    container.innerHTML = "";

    if (filtered.length === 0) {

        container.innerHTML =
            `<p>No hay juegos disponibles.</p>`;

        return;
    }


    filtered.forEach(game => {

        const card = document.createElement("article");

        card.className = "game-card";

        card.innerHTML = `

            <img
                class="game-image"
                src="${game.image}"
                alt="${game.name}"
                loading="lazy"
            >

            <div class="game-info">

                <h3>${game.name}</h3>

                <div class="console">
                    ${game.console}
                </div>

                <div class="price">
                    ${money(game.price)}
                </div>

                <span class="status">
                    ${game.status}
                </span>

                <a
                    class="whatsapp"
                    href="${whatsappLink(game)}"
                    target="_blank"
                    rel="noopener"
                >
                    💬 CONSULTAR POR WHATSAPP
                </a>

            </div>
        `;

        container.appendChild(card);

    });

}


let currentOffer = 0;


function getOffers() {

    return getGames().filter(
        game => game.status === "Oferta"
    );

}


function showOffer() {

    const container =
        document.getElementById("carouselContent");

    if (!container) return;

    const offers = getOffers();

    if (offers.length === 0) {

        container.innerHTML = `
            <div class="offer-slide">
                <div class="offer-info">
                    <h3>No hay ofertas actualmente</h3>
                    <p>Volvé pronto para ver nuevas ofertas.</p>
                </div>
            </div>
        `;

        return;
    }

    if (currentOffer >= offers.length) {
        currentOffer = 0;
    }

    const game = offers[currentOffer];

    container.innerHTML = `

        <div class="offer-slide">

            <img
                src="${game.image}"
                alt="${game.name}"
            >

            <div class="offer-info">

                <span class="status">
                    🔥 OFERTA
                </span>

                <h3>
                    ${game.name}
                </h3>

                <p>
                    ${game.console}
                </p>

                <div class="new-price">
                    ${money(game.price)}
                </div>

                <a
                    href="${whatsappLink(game)}"
                    target="_blank"
                    class="whatsapp"
                >
                    💬 COMPRAR / CONSULTAR
                </a>

            </div>

        </div>

    `;

}


function nextOffer() {

    const offers = getOffers();

    if (!offers.length) return;

    currentOffer++;

    if (currentOffer >= offers.length) {
        currentOffer = 0;
    }

    showOffer();

}


function previousOffer() {

    const offers = getOffers();

    if (!offers.length) return;

    currentOffer--;

    if (currentOffer < 0) {
        currentOffer = offers.length - 1;
    }

    showOffer();

}


/* FILTROS */

document.querySelectorAll(".filter").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".filter")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        showGames(button.dataset.console);

    });

});


/* MODO OSCURO */

const themeButton =
    document.getElementById("themeButton");


if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const light =
            document.body.classList.contains("light");

        localStorage.setItem(
            "akumaTheme",
            light ? "light" : "dark"
        );

        themeButton.textContent =
            light ? "🌙" : "☀️";

    });


    if (localStorage.getItem("akumaTheme") === "light") {

        document.body.classList.add("light");

        themeButton.textContent = "🌙";

    }

}


/* INICIO */

showGames();

showOffer();


/* CAMBIA AUTOMÁTICAMENTE EL CARRUSEL */

setInterval(() => {

    nextOffer();

}, 5000);
