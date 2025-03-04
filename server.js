const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Menyajikan file statis dari folder "public"
app.use(express.static(path.join(__dirname)));

// Routing untuk halaman daftar
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/daftar", (req, res) => {
    res.sendFile(path.join(__dirname, "daftar.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "admin.html"));
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
