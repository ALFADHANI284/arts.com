document.addEventListener('DOMContentLoaded', function () {
    // Cek apakah username dan password sudah ada di localStorage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // Jika pengguna sudah login sebelumnya, kita arahkan ke userInfo
    if (savedUsername && savedPassword) {
        // Tampilkan userInfo dan sembunyikan form
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('savedUsername').textContent = savedUsername;
        document.getElementById('savedPassword').textContent = savedPassword;
    }

    // Event listener pada form login
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Ambil nilai input
        const username = document.getElementById('nama').value;
        const password = document.getElementById('password').value;

        if (username === "Admin" && password === "Admin123") {
            alert('anda Admin');
            localStorage.setItem('role', 'Admin');
        } else {
            alert('anda USER');
            localStorage.setItem('role', 'USER');
        }

        // Simpan di localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Arahkan pengguna ke user info
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('savedUsername').textContent = username;
        document.getElementById('savedPassword').textContent = password;
    });

    // Event listener untuk tombol logout
    document.getElementById('logoutButton').addEventListener('click', function () {
        // Menghapus data dari localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('role');

        // Tampilkan kembali form login dan sembunyikan user info
        document.getElementById('userInfo').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';

        // Reset isi form
        document.getElementById('nama').value = '';
        document.getElementById('password').value = '';
    });
});

// Function show/hide password
function hideseek() {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// hasil nama
const username = localStorage.getItem('username');
const role = localStorage.getItem('role')

// Tampilkan data jika tersedia
if (username) {
    document.getElementById('hasil-nama').textContent = username;
} else {
    document.getElementById('displayUsername').textContent = 'Pengguna';
}

if (role) {
    document.getElementById('displayRole').textContent = role;
}else {
    document.getElementById('displayRole').textContent = 'anda siapa?';
}