let games =
    JSON.parse(
        localStorage.getItem("akumaGames")
    ) || [];


const form =
    document.getElementById("gameForm");


const gameId =
    document.getElementById("gameId");


const nameInput =
    document.getElementById("name");


const consoleInput =
    document.getElementById("console");


const priceInput =
    document.getElementById("price");


const statusInput =
    document.getElementById("status");


const imageFile =
    document.getElementById("imageFile");


const adminGames =
    document.getElementById("adminGames");


function save() {

    localStorage.setItem(
        "akumaGames",
        JSON.stringify(games)
    );

}


function money(value) {

    return "$" +
        Number(value).toLocaleString("es-AR");

}


function renderAdmin() {

    adminGames.innerHTML = "";

    if (games.length === 0) {

        adminGames.innerHTML =
            "<p>No hay juegos cargados.</p>";

        return;

    }


    games.forEach(game => {

        const item =
            document.createElement("div");

        item.className =
            "admin-game";


        item.innerHTML = `

            <img
                src="${game.image}"
                alt="${game.name}"
            >

            <div class="admin-game-info">

                <strong>
                    ${game.name}
                </strong>

                <br>

                ${game.console}

                <br>

                ${money(game.price)}

                <br>

                <small>
                    ${game.status}
                </small>

            </div>

            <button
                class="edit-button"
                onclick="editGame(${game.id})"
            >
                EDITAR
            </button>

            <button
                class="delete-button"
                onclick="deleteGame(${game.id})"
            >
                ELIMINAR
            </button>

        `;


        adminGames.appendChild(item);

    });

}


form.addEventListener("submit", async event => {

    event.preventDefault();


    const id =
        gameId.value;


    let image =
        "";


    if (imageFile.files.length > 0) {

        image =
            await readImage(
                imageFile.files[0]
            );

    }


    if (id) {

        const index =
            games.findIndex(
                game =>
                    game.id == id
            );


        if (index !== -1) {

            games[index].name =
                nameInput.value;

            games[index].console =
                consoleInput.value;

            games[index].price =
                Number(priceInput.value);

            games[index].status =
                statusInput.value;


            if (image) {

                games[index].image =
                    image;

            }

        }

    } else {

        if (!image) {

            image =
                "https://via.placeholder.com/500x700?text=AKUMA+STORE";

        }


        const newGame = {

            id: Date.now(),

            name:
                nameInput.value,

            console:
                consoleInput.value,

            price:
                Number(priceInput.value),

            status:
                statusInput.value,

            image:
                image

        };


        games.push(newGame);

    }


    save();

    form.reset();

    gameId.value = "";

    document.getElementById("formTitle").textContent =
        "Agregar juego";

    renderAdmin();

});


function readImage(file) {

    return new Promise(resolve => {

        const reader =
            new FileReader();


        reader.onload = event => {

            resolve(
                event.target.result
            );

        };


        reader.readAsDataURL(file);

    });

}


function editGame(id) {

    const game =
        games.find(
            game =>
                game.id == id
        );


    if (!game) return;


    gameId.value =
        game.id;

    nameInput.value =
        game.name;

    consoleInput.value =
        game.console;

    priceInput.value =
        game.price;

    statusInput.value =
        game.status;


    document.getElementById("formTitle").textContent =
        "Editar juego";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function deleteGame(id) {

    const game =
        games.find(
            game =>
                game.id == id
        );


    if (!game) return;


    const confirmDelete =
        confirm(
            `¿Eliminar ${game.name}?`
        );


    if (!confirmDelete) return;


    games =
        games.filter(
            game =>
                game.id != id
        );


    save();

    renderAdmin();

}


function cancelEdit() {

    form.reset();

    gameId.value = "";

    document.getElementById("formTitle").textContent =
        "Agregar juego";

}


renderAdmin();
