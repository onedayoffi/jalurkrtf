document.addEventListener("DOMContentLoaded", function () {
    // Panggil fungsi untuk menampilkan produk dari penyimpanan
    tampilkanProdukDariPenyimpanan();
});

function tampilkanProdukDariPenyimpanan() {
    // Ambil produk dari penyimpanan (contoh: localStorage)
    var produkList = JSON.parse(localStorage.getItem('produkList')) || [];

    // Tampilkan setiap produk
    for (var i = 0; i < produkList.length; i++) {
        var produk = produkList[i];

        // Tampilkan produk di halaman toko pengguna
        var produkSection = document.getElementById('produk-section');

        var produkCard = document.createElement('div');
        produkCard.innerHTML = `
		    <div class="product" onclick="goToProductPage('product-page1.html')">
            <img src="${produk.gambar}" alt="${produk.nama}">
            <div class="product-name">${produk.nama}</div>
            <div class="product-price">Rp. ${produk.harga}</div>
            <div class="terjual"> <i class="fas fa-star star-icon"></i>&nbsp;${produk.rating} | ${produk.terjual} terjual</div>
        `;

        produkSection.appendChild(produkCard);
    }
}
