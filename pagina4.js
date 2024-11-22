// Inicializar EmailJS
emailjs.init("JruyWWTDeeTgDELeU");

// Asegurarnos de que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario
    const form = document.getElementById("message-form");

    // Verificar si el formulario existe antes de agregar eventos
    if (form) {
        // Manejar el envío del formulario
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar recargar la página

            const name = document.getElementById("name").value;
            const lastname = document.getElementById("lastname").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Enviar datos con EmailJS
            emailjs
                .send("service_o7it8bg", "template_yifwok8", {
                    name: name,
                    lastname: lastname,
                    phone: phone,
                    email: email,
                    message: message,
                })
                .then(() => {
                    alert("Mensaje enviado con éxito.");
                    form.reset(); // Reiniciar formulario
                })
                .catch((error) => {
                    console.error("Error al enviar los datos:", error);
                    alert("Hubo un error al enviar los datos.");
                });
        });

        // Manejar el botón "Limpiar"
        const resetButton = document.getElementById("reset-button");
        if (resetButton) {
            resetButton.addEventListener("click", function () {
                form.reset();
            });
        }
    }
});

// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}
