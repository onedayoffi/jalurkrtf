function simpanProduk() {
    // Ambil nilai input
    var gambar = document.getElementById('gambar').value;
    var nama = document.getElementById('nama').value;
    var harga = document.getElementById('harga').value;
    var rating = document.getElementById('rating').value;
	 var terjual = document.getElementById('terjual').value;

    // Simpan produk ke penyimpanan (contoh: localStorage)
    var produk = { gambar: gambar, nama: nama, harga: harga, rating: rating, terjual: terjual};
    var produkList = JSON.parse(localStorage.getItem('produkList')) || [];
    produkList.push(produk);
    localStorage.setItem('produkList', JSON.stringify(produkList));

    // Bersihkan formulir setelah menyimpan
    document.getElementById('form-produk').reset();
}
