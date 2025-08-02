let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar si el nombre ya existe en el arreglo
    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado. No se permiten duplicados.");
        return;
    }

    amigos.push(nombre);

    mostrarListaDeAmigos();

    document.getElementById("amigo").value = "";
}


function mostrarListaDeAmigos() {
    // 1. Obtener el elemento UL donde se mostrará la lista
    let lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista para evitar duplicados
    lista.innerHTML = "";

    // 3. Recorrer el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];

        // 4. Crear un nuevo elemento <li> por cada amigo
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;

        // 5. Agregar el <li> al UL
        lista.appendChild(nuevoElemento);
    }
}
function sortearAmigo() {
    // 1. Validar que haya al menos un amigo
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
