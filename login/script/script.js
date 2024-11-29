document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // validação, mostrando que login foi efetuado

    if (username === "admin" && password === "1234") {
        document.getElementById("loginMessage").style.color = "green";
        document.getElementById("loginMessage").textContent = "Login realizado com sucesso!";
    } else {
        document.getElementById("loginMessage").style.color = "red";
        document.getElementById("loginMessage").textContent = "Nome ou senha incorretos. Tente novamente.";
    }
});