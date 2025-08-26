// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigo
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim(); // Captura y limpia el valor del input

  // Validar que el campo no esté vacío
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return; // Detiene la ejecución
  }

  // Validar que el nombre no esté duplicado
  if (amigos.includes(nombreAmigo)) {
    alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombreAmigo);

  // Limpiar el campo de entrada
  inputAmigo.value = "";

  // Actualizar la lista en el HTML
  actualizarLista();
}

// Función para actualizar la lista de amigos
function actualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar contenido previo
  listaAmigos.innerHTML = "";

  // Recorrer el array y agregar <li> al ul
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
    return;
  }

  // Generar índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en el HTML
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}