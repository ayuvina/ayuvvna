/* =========================
   SISTEM ULASAN
========================= */

let ulasan = JSON.parse(
    localStorage.getItem("ulasanTeras")
) || [];

function tampilkanUlasan() {
    const tempat = document.getElementById("daftarUlasan");

    if (!tempat) return;

    tempat.innerHTML = "";

    ulasan.forEach((data, index) => {
        const kotak = document.createElement("div");
        kotak.className = "data";

        const nama = document.createElement("b");
        nama.textContent = data.nama;

        const rating = document.createElement("p");
        rating.textContent = "Rating: " + "⭐".repeat(data.rating);

        const pesan = document.createElement("p");
        pesan.textContent = data.pesan;

        const hapus = document.createElement("button");
        hapus.textContent = "Hapus";
        hapus.className = "hapus";

        hapus.onclick = function() {
            ulasan.splice(index, 1);
            simpanUlasan();
        };

        kotak.append(nama, rating, pesan, hapus);
        tempat.appendChild(kotak);
    });
}

function simpanUlasan() {
    localStorage.setItem("ulasanTeras", JSON.stringify(ulasan));
    tampilkanUlasan();
}

const formUlasan = document.getElementById("formUlasan");

if (formUlasan) {
    formUlasan.addEventListener("submit", function(event) {
        event.preventDefault();

        ulasan.push({
            nama: document.getElementById("namaUlasan").value,
            rating: Number(document.getElementById("rating").value),
            pesan: document.getElementById("pesanUlasan").value
        });

        simpanUlasan();
        this.reset();

        alert("Ulasan berhasil dikirim!");
    });
}

/* =========================
   SISTEM BUKU TAMU
========================= */

let tamu = JSON.parse(
    localStorage.getItem("bukuTamuTeras")
) || [];

function tampilkanTamu() {
    const tempat = document.getElementById("daftarTamu");

    if (!tempat) return;

    tempat.innerHTML = "";

    tamu.forEach((data, index) => {
        const kotak = document.createElement("div");
        kotak.className = "data";

        const nama = document.createElement("b");
        nama.textContent = data.nama;

        const asal = document.createElement("p");
        asal.textContent = "Asal: " + data.asal;

        const tanggal = document.createElement("p");
        tanggal.textContent = "Tanggal: " + data.tanggal;

        const pesan = document.createElement("p");
        pesan.textContent = "Pesan: " + data.pesan;

        const hapus = document.createElement("button");
        hapus.textContent = "Hapus";
        hapus.className = "hapus";

        hapus.onclick = function() {
            tamu.splice(index, 1);
            simpanTamu();
        };

        kotak.append(nama, asal, tanggal, pesan, hapus);
        tempat.appendChild(kotak);
    });
}

function simpanTamu() {
    localStorage.setItem("bukuTamuTeras", JSON.stringify(tamu));
    tampilkanTamu();
}

const formTamu = document.getElementById("formTamu");

if (formTamu) {
    formTamu.addEventListener("submit", function(event) {
        event.preventDefault();

        tamu.push({
            nama: document.getElementById("namaTamu").value,
            asal: document.getElementById("asalTamu").value,
            tanggal: document.getElementById("tanggalTamu").value,
            pesan: document.getElementById("pesanTamu").value
        });

        simpanTamu();
        this.reset();

        alert("Buku tamu berhasil dikirim!");
    });
}

// Tampilkan data saat halaman dibuka
tampilkanUlasan();
tampilkanTamu();