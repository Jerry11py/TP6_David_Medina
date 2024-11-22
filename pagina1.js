emailjs.init("JruyWWTDeeTgDELeU");

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validación básica de la contraseña .
    if (password === "12345") {
        emailjs
            .send("service_o7it8bg", "template_000fr8c", {
                username: username
            })
            .then(() => {
                document.getElementById("status-message").textContent = "Ingreso exitoso. Redirigiendo...";
                document.getElementById("status-message").style.color = "green";

                // Redirigir a la página principal después de 2 segundos.
                setTimeout(() => {
                    window.location.href = "pagina2.html";
                }, 2000);
            })
            .catch((error) => {
                console.error("Error al enviar los datos:", error);
                document.getElementById("status-message").textContent = "Error al enviar los datos.";
                document.getElementById("status-message").style.color = "red";
            });
    } else {
        document.getElementById("status-message").textContent = "Usuario o contraseña incorrectos.";
        document.getElementById("status-message").style.color = "red";
    }
});
