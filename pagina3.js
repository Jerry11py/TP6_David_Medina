// Inicializar EmailJS
emailjs.init("JruyWWTDeeTgDELeU");

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("personal-form");

    // Manejo del envío del formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar recargar la página

        const name = document.getElementById("name").value;
        const lastname = document.getElementById("lastname").value;
        const age = document.getElementById("age").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const city = document.getElementById("city").value;
        const country = document.getElementById("country").value;

        // Enviar datos con EmailJS
        emailjs
            .send("service_o7it8bg", "template_yifwok8", {
                name: name,
                lastname: lastname,
                age: age,
                address: address,
                phone: phone,
                email: email,
                city: city,
                country: country,
            })
            .then(() => {
                alert("Datos enviados con éxito.");
                form.reset(); // Limpiar formulario
            })
            .catch((error) => {
                console.error("Error al enviar los datos:", error);
                alert("Hubo un error al enviar los datos.");
            });
    });

    // Manejo del botón "Limpiar"
    document.getElementById("reset-button").addEventListener("click", function () {
        form.reset();
    });
});

// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}
