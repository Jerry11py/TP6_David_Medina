document.getElementById("submit-name").addEventListener("click", function () {
    const name = document.getElementById("name").value;

    if (name.trim() !== "") {
        const welcomeMessage = `¡Hola, ${name}! Bienvenido a la página principal.`;
        const welcomeElement = document.getElementById("personalized-welcome");

        welcomeElement.textContent = welcomeMessage;
        welcomeElement.style.display = "block";
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});

function navigateTo(page) {
    window.location.href = page;
}

// Mostrar un mensaje inicial de bienvenida.
window.onload = () => {
    alert("¡Bienvenido a la página principal!");
};
