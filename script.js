// --- DATA BAHAN BAKU GLOBAL & HARGA (Simulasi) ---
const ingredientsCatalog = [
    { name: "Daging Sapi (Has Dalam)", price: 135000, unit: "kg" },
    { name: "Santan Kental", price: 15000, unit: "liter" },
    { name: "Cabai Merah Keriting", price: 35000, unit: "kg" },
    { name: "Bawang Merah", price: 28000, unit: "kg" },
    { name: "Bawang Putih", price: 32000, unit: "kg" },
    { name: "Lengkuas", price: 8000, unit: "ikat" },
    { name: "Serai", price: 5000, unit: "ikat" },
    { name: "Jahe", price: 6000, unit: "kg" },
    { name: "Ketumbar Bubuk", price: 8000, unit: "bungkus" },
    { name: "Daun Kunyit", price: 4000, unit: "ikat" },
    { name: "Daging Ayam Fillet", price: 45000, unit: "kg" },
    { name: "Kacang Tanah", price: 30000, unit: "kg" },
    { name: "Kecap Manis", price: 12000, unit: "botol" },
    { name: "Gula Merah", price: 15000, unit: "kg" },
    { name: "Nasi Putih (Siap Masak)", price: 10000, unit: "porsi" },
    { name: "Telur Ayam", price: 2500, unit: "butir" },
    { name: "Daun Salam", price: 3000, unit: "ikat" },
    { name: "Kunyit", price: 7000, unit: "kg" },
    { name: "Tauge", price: 5000, unit: "bungkus" },
    { name: "Lontong/Ketupat", price: 8000, unit: "bungkus" },
    { name: "Daun Jeruk", price: 3000, unit: "bungkus" },
    { name: "Kluwek", price: 20000, unit: "ons" },
    { name: "Tepung Sagu", price: 18000, unit: "kg" },
];

// --- FUNGSI UTILITY: Mencari Bahan dan Menghitung Harga ---
function findIngredient(name) {
    return ingredientsCatalog.find(item => item.name.toLowerCase().includes(name.toLowerCase()));
}

function formatPrice(number) {
    // Fungsi untuk format angka menjadi mata uang Rupiah
    // Pastikan number tidak null atau undefined
    if (typeof number !== 'number') return 'Rp 0';
    return 'Rp ' + Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// --- DATA SEMUA MAKANAN NUSANTARA (8 Hidangan) ---
const allNusantaraFoods = [
    // 1. MAHAKARYA PILIHAN 1
    {
        id: 1,
        name: "Rendang Sapi",
        region: "Sumatera Barat",
        isTop: true, 
        image: "images/rendang.jpg",
        description: "Potongan daging sapi dimasak perlahan dalam santan kelapa kental dan bumbu rempah hingga kering. Menghasilkan rasa yang sangat kaya, gurih, dan pedas.",
        recipe: `
            Bahan Utama: 1 kg daging sapi, 1 liter santan kental.
            Bumbu Halus: Bawang merah, bawang putih, cabai, lengkuas, kunyit, jahe, serai, daun kunyit, daun jeruk, asam kandis.
            Cara Membuat Singkat: 1. Tumis bumbu halus hingga harum. 2. Masukkan daging sapi, aduk. 3. Masak dengan santan kental 4-8 jam hingga kering.
        `,
        shopping_list: [
            { name: "Daging Sapi (Has Dalam)", qty: 1, unit: "kg" },
            { name: "Santan Kental", qty: 1, unit: "liter" },
            { name: "Bawang Merah", qty: 0.25, unit: "kg" },
            { name: "Bawang Putih", qty: 0.1, unit: "kg" },
            { name: "Cabai Merah Keriting", qty: 0.15, unit: "kg" },
            { name: "Lengkuas", qty: 1, unit: "ikat" },
            { name: "Daun Kunyit", qty: 1, unit: "ikat" },
            { name: "Serai", qty: 1, unit: "ikat" },
        ]
    },
    // 2. MAHAKARYA PILIHAN 2
    {
        id: 2,
        name: "Sate Ayam Madura",
        region: "Jawa Timur (Madura)",
        isTop: true, 
        image: "images/sate_ayam_madura.jpg",
        description: "Daging ayam yang ditusuk, dipanggang di atas bara api, dan disajikan dengan bumbu kacang kental yang khas.",
        recipe: `
            Bahan Utama: Daging ayam fillet, tusuk sate.
            Bumbu Kacang: Kacang tanah goreng, bawang putih, cabai, gula merah, air asam jawa, kecap manis.
            Cara Membuat Singkat: 1. Lumuri ayam dengan bumbu. 2. Bakar sambil diolesi bumbu kacang. 3. Sajikan dengan bumbu kacang kental, irisan bawang merah, dan lontong.
        `,
        shopping_list: [
            { name: "Daging Ayam Fillet", qty: 0.5, unit: "kg" },
            { name: "Kacang Tanah", qty: 0.5, unit: "kg" },
            { name: "Kecap Manis", qty: 1, unit: "botol" },
            { name: "Bawang Putih", qty: 0.1, unit: "kg" },
            { name: "Gula Merah", qty: 0.25, unit: "kg" },
            { name: "Lontong/Ketupat", qty: 1, unit: "bungkus" },
        ]
    },
    // 3. MAHAKARYA PILIHAN 3
    {
        id: 3,
        name: "Nasi Goreng",
        region: "Seluruh Indonesia",
        isTop: true, 
        image: "images/nasi_goreng.jpg",
        description: "Nasi yang digoreng cepat dengan bumbu dasar bawang, cabai, dan kecap manis. Hidangan klasik yang mendunia.",
        recipe: `
            Bahan Utama: Nasi putih dingin, telur, suwiran ayam.
            Bumbu Dasar: Bawang merah, bawang putih, cabai rawit, kecap manis, garam.
            Cara Membuat Singkat: 1. Tumis bumbu halus. 2. Masukkan nasi dan telur. 3. Tambahkan kecap manis dan bumbu lain, aduk cepat.
        `,
        shopping_list: [
            { name: "Nasi Putih (Siap Masak)", qty: 2, unit: "porsi" },
            { name: "Telur Ayam", qty: 2, unit: "butir" },
            { name: "Bawang Merah", qty: 0.1, unit: "kg" },
            { name: "Bawang Putih", qty: 0.05, unit: "kg" },
            { name: "Kecap Manis", qty: 1, unit: "botol" },
        ]
    },
    // 4. HIDANGAN TAMBAHAN 1
    {
        id: 4,
        name: "Soto Ayam Lamongan",
        region: "Jawa Timur",
        isTop: false,
        image: "images/soto_ayam.jpg",
        description: "Sup ayam kuning kaya rempah dengan serundeng (koya) yang gurih. Disajikan dengan tauge, telur, dan irisan jeruk nipis.",
        recipe: `
            Bahan Utama: Daging ayam, bihun, tauge.
            Bumbu Kuah Kuning: Kunyit, jahe, bawang putih, bawang merah, serai, daun jeruk, ketumbar.
            Cara Membuat Singkat: 1. Rebus ayam hingga matang. 2. Tumis bumbu halus hingga wangi, masukkan ke kuah kaldu. 3. Sajikan dengan suwiran ayam, tauge, dan koya.
        `,
        shopping_list: [
            { name: "Daging Ayam Fillet", qty: 0.75, unit: "kg" },
            { name: "Kunyit", qty: 0.1, unit: "kg" },
            { name: "Tauge", qty: 1, unit: "bungkus" },
            { name: "Bawang Merah", qty: 0.15, unit: "kg" },
            { name: "Bawang Putih", qty: 0.1, unit: "kg" },
            { name: "Serai", qty: 1, unit: "ikat" },
            { name: "Ketumbar Bubuk", qty: 1, unit: "bungkus" },
        ]
    },
    // 5. HIDANGAN TAMBAHAN 2
    {
        id: 5,
        name: "Gado-Gado",
        region: "Jakarta",
        isTop: false,
        image: "images/gado_gado.jpg",
        description: "Salad sayur rebus khas Indonesia yang disiram dengan saus kacang kental dan pedas, dilengkapi dengan lontong/ketupat dan kerupuk.",
        recipe: `
            Bahan Utama: Sayuran rebus (kangkung, kacang panjang, tauge), kentang, telur, tahu, tempe.
            Bumbu Saus Kacang: Kacang tanah goreng, gula merah, asam jawa, cabai, bawang putih.
            Cara Membuat Singkat: 1. Rebus/kukus semua sayuran dan bahan pelengkap. 2. Haluskan bumbu saus kacang. 3. Campurkan semua bahan dan sajikan.
        `,
        shopping_list: [
            { name: "Kacang Tanah", qty: 0.75, unit: "kg" },
            { name: "Gula Merah", qty: 0.5, unit: "kg" },
            { name: "Cabai Merah Keriting", qty: 0.1, unit: "kg" },
            { name: "Telur Ayam", qty: 4, unit: "butir" },
            { name: "Lontong/Ketupat", qty: 2, unit: "bungkus" },
        ]
    },
    // 6. HIDANGAN TAMBAHAN 3
    {
        id: 6,
        name: "Rawon",
        region: "Jawa Timur",
        isTop: false,
        image: "images/rawon.jpg",
        description: "Sup daging sapi kaya rempah dengan kuah hitam pekat khas dari bumbu kluwek. Sering disebut sebagai 'Black Beef Soup' dari Jawa Timur.",
        recipe: `
            Bahan Utama: Daging sapi, tauge pendek.
            Bumbu Halus: Bawang merah, bawang putih, ketumbar, kunyit, jahe, kluwek (penyebab warna hitam), serai, daun jeruk, daun salam.
            Cara Membuat Singkat: 1. Rebus daging hingga empuk. 2. Tumis bumbu halus dan kluwek hingga harum. 3. Masukkan ke dalam kaldu daging. 4. Sajikan dengan tauge pendek dan sambal.
        `,
        shopping_list: [
            { name: "Daging Sapi (Has Dalam)", qty: 0.75, unit: "kg" },
            { name: "Kluwek", qty: 1, unit: "ons" },
            { name: "Bawang Merah", qty: 0.15, unit: "kg" },
            { name: "Bawang Putih", qty: 0.1, unit: "kg" },
            { name: "Tauge", qty: 1, unit: "bungkus" },
            { name: "Daun Salam", qty: 1, unit: "ikat" },
        ]
    },
    // 7. HIDANGAN TAMBAHAN 4
    {
        id: 7,
        name: "Papeda & Ikan Kuah Kuning",
        region: "Maluku & Papua",
        isTop: false,
        image: "images/papeda.jpg",
        description: "Makanan pokok berupa bubur sagu kental dan lengket (papeda) yang disajikan dengan Ikan Kuah Kuning. Rasanya segar dan gurih.",
        recipe: `
            Bahan Utama: Tepung sagu, air. Ikan (kakap/tongkol), bumbu kuah kuning.
            Bumbu Kuah Kuning: Kunyit, bawang merah, bawang putih, jahe, cabai rawit (optional).
            Cara Membuat Singkat: 1. Larutkan sagu dengan air dingin. 2. Siram dengan air mendidih sambil diaduk cepat hingga menjadi bubur kental. 3. Masak ikan dengan bumbu kuah kuning.
        `,
        shopping_list: [
            { name: "Tepung Sagu", qty: 1, unit: "kg" },
            { name: "Kunyit", qty: 0.1, unit: "kg" },
            { name: "Bawang Merah", qty: 0.1, unit: "kg" },
            { name: "Jahe", qty: 0.5, unit: "kg" }, 
        ]
    },
    // 8. HIDANGAN TAMBAHAN 5
    {
        id: 8,
        name: "Gudeg",
        region: "Yogyakarta & Jawa Tengah",
        isTop: false,
        image: "images/gudeg.jpg",
        description: "Nangka muda (gori) yang dimasak berjam-jam dengan santan, gula aren, dan rempah. Menghasilkan rasa manis legit dan warna cokelat gelap.",
        recipe: `
            Bahan Utama: Nangka muda (gori), santan kental.
            Bumbu: Bawang merah, bawang putih, gula merah, ketumbar, kemiri, daun jati (untuk warna).
            Cara Membuat Singkat: 1. Susun daun jati di dasar panci. 2. Masukkan nangka muda, bumbu, santan, dan gula merah. 3. Masak dengan api kecil selama 8-12 jam hingga kuah mengering.
        `,
        shopping_list: [
            { name: "Santan Kental", qty: 1, unit: "liter" },
            { name: "Gula Merah", qty: 1, unit: "kg" },
            { name: "Bawang Merah", qty: 0.25, unit: "kg" },
            { name: "Bawang Putih", qty: 0.1, unit: "kg" },
            { name: "Ketumbar Bubuk", qty: 1, unit: "bungkus" },
        ]
    },
];

// --- ELEMENT MODAL ---
const modal = document.getElementById('recipe-modal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');


closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- FUNGSI MODAL RESEP ---
function openRecipeModal(foodId) {
    const food = allNusantaraFoods.find(f => f.id === foodId);
    
    if (food) {
        modalTitle.textContent = `Resep Singkat: ${food.name}`;
        
        // Menambahkan tag <img> dan memformat resep
        const recipeHtml = `
            <img src="${food.image}" alt="Gambar ${food.name}">
            <p><strong>Asal Daerah:</strong> ${food.region}</p>
            <p>${food.description}</p>
            <div class="recipe-details">
                ${food.recipe.replace(/\n/g, '<br>')}
            </div>
        `; 
        
        modalBody.innerHTML = recipeHtml;
        modal.style.display = "block";
    }
}

// --- FUNGSI RINCIAN BELANJA (Di dalam Modal) ---
function handleBuyClick(foodName) {
    const food = allNusantaraFoods.find(f => f.name === foodName);

    if (!food || !food.shopping_list) {
        alert("Rincian bahan untuk menu ini belum tersedia.");
        return;
    }

    modalTitle.textContent = `Rincian Belanja Bahan ${food.name}`;
    let totalCost = 0;
    
    let listHTML = `
        <p>Berikut adalah estimasi bahan dan harga untuk membuat <strong>${food.name}</strong>:</p>
        <table class="catalog-table">
            <thead>
                <tr>
                    <th>Bahan</th>
                    <th>Kuantitas</th>
                    <th>Harga Satuan (Est.)</th>
                    <th>Subtotal (Est.)</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    food.shopping_list.forEach(item => {
        const catalogItem = findIngredient(item.name);
        let price = 0;
        let subtotal = 0;
        let unit = item.unit;
        let pricePerUnitDisplay = "N/A";

        if (catalogItem) {
            price = catalogItem.price;
            subtotal = price * item.qty;
            totalCost += subtotal;
            unit = catalogItem.unit;
            pricePerUnitDisplay = `${formatPrice(price)} / ${unit}`;
        }
        
        listHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.qty} ${item.unit}</td>
                <td>${pricePerUnitDisplay}</td>
                <td>${formatPrice(subtotal)}</td>
            </tr>
        `;
    });

    listHTML += `
            </tbody>
        </table>
        <h4 class="total-cost">Total Estimasi Belanja: ${formatPrice(totalCost)}</h4>
        <p class="disclaimer"><em>*Harga adalah estimasi berdasarkan katalog standar kami dan dapat berubah sewaktu-waktu.</em></p>
    `;

    modalBody.innerHTML = listHTML;
    modal.style.display = "block";
}


// --- FUNGSI BARU: DISPLAY KATALOG BAHAN BAKU DI MODAL ---
function displayIngredientCatalogModal() {
    modalTitle.textContent = 'Katalog Bahan Baku & Harga (Estimasi) 🛒';

    let tableHTML = `
        <p>Berikut adalah daftar harga satuan estimasi dari bahan baku yang tersedia di platform kami.</p>
        <table class="catalog-table">
            <thead>
                <tr>
                    <th>Nama Bahan Baku</th>
                    <th>Harga Satuan (Estimasi)</th>
                    <th>Unit</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Mengisi baris tabel dengan data dari ingredientsCatalog
    ingredientsCatalog.forEach(item => {
        tableHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${formatPrice(item.price)}</td>
                <td>/${item.unit}</td>
            </tr>
        `;
    });

    tableHTML += `
            </tbody>
        </table>
        <p class="disclaimer"><em>*Semua harga adalah estimasi standar dan dapat berubah sewaktu-waktu.</em></p>
    `;

    modalBody.innerHTML = tableHTML;
    modal.style.display = "block";
}


// --- FUNGSI UTAMA DISPLAY & EVENT LISTENERS ---
function displayFoods() {
    const foodListContainer = document.getElementById('food-list');
    
    if (!foodListContainer) {
        console.error("Elemen dengan ID 'food-list' tidak ditemukan.");
        return; 
    }
    
    foodListContainer.innerHTML = ''; 
    
    allNusantaraFoods.forEach(food => { 
        const card = document.createElement('div');
        const cardClass = food.isTop ? 'food-card top-mahakarya' : 'food-card'; 
        card.classList.add(...cardClass.split(' '));

        card.innerHTML = `
            <img src="${food.image}" alt="Gambar ${food.name}" loading="lazy">
            <h3>${food.name}</h3>
            <p><strong>Asal Daerah:</strong> ${food.region}</p>
            <p>${food.description}</p>
            <a class="recipe-link" onclick="openRecipeModal(${food.id})">Lihat Resep Singkat</a>
            <button class="btn btn-primary" onclick="handleBuyClick('${food.name}')">Beli Bahan ${food.name}</button>
        `;
        
        foodListContainer.appendChild(card);
    });
}

// Event listener untuk form kerja sama
document.getElementById('collaboration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Proposal Kerja Sama telah dikirim. Terima kasih atas minat Anda!');
    this.reset();
});

// Memuat semua fungsi display saat DOM sudah siap
document.addEventListener('DOMContentLoaded', () => {
    displayFoods();
});