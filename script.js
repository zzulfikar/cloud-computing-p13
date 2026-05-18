// Data login dummy
const validUsers = [
    {
        username: "admin",
        password: "admin123"
    },
    {
        username: "user",
        password: "user123"
    },
    {
        username: "kelompok",
        password: "pekan9"
    }
];

// Ambil elemen
const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");

// Event submit
loginForm.addEventListener("submit", function(event) {

    // Mencegah reload
    event.preventDefault();

    // Ambil input
    const username = document
        .getElementById("username")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value
        .trim();

    // Cari user
    const userFound = validUsers.find(function(user) {

        return (
            user.username === username &&
            user.password === password
        );

    });

    // Jika login berhasil
    if (userFound) {

        showMessage(
            "Login berhasil! Selamat datang, " + username + "!",
            "success"
        );

        // Simulasi redirect
        setTimeout(function() {

            alert("Anda akan diarahkan ke dashboard...");

            // Contoh redirect:
            // window.location.href = "dashboard.html";

        }, 1500);

    }

    // Jika gagal
    else {

        showMessage(
            "Username atau password salah!",
            "error"
        );

        // Kosongkan password
        document.getElementById("password").value = "";

    }

});

// Fungsi tampil pesan
function showMessage(text, type) {

    messageDiv.style.display = "block";

    messageDiv.textContent = text;

    messageDiv.className = "message " + type;

    // Hilangkan pesan otomatis
    setTimeout(function() {

        messageDiv.style.display = "none";

    }, 4000);

}

// Animasi input
const inputs = document.querySelectorAll("input");

inputs.forEach(function(input) {

    input.addEventListener("focus", function() {

        this.parentElement.style.transform = "scale(1.02)";

    });

    input.addEventListener("blur", function() {

        this.parentElement.style.transform = "scale(1)";

    });

});

// Console testing
console.log("Website login berhasil dijalankan!");

console.log("Data user testing:");

validUsers.forEach(function(user) {

    console.log(
        "Username: " + user.username +
        " | Password: " + user.password
    );

});