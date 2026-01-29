// --- DATABASE MAKANAN (MODAL) ---
const dataMakanan = {
    'nasi': {
        judul: "Nasi Putih",
        isi: "<b>Kandungan:</b> Karbohidrat, protein, zat besi.<br><br><b>Fungsi:</b> Sumber energi utama bagi tubuh, terutama untuk otak. Magnesium di dalamnya membantu pembentukan tulang."
    },
    'bayam': {
        judul: "Sayur Bayam",
        isi: "<b>Kandungan:</b> Protein, serat, vitamin A, C, K, antioksidan.<br><br><b>Fungsi:</b> Menangkal radikal bebas (molekul tidak stabil yang memiliki elektron tidak berpasangan) dan meningkatkan imun tubuh."
    },
    'tahu': {
        judul: "Tahu",
        isi: "<b>Kandungan:</b> Protein nabati, kalsium, fosfor, zat besi.<br><br><b>Fungsi:</b> Membantu membangun dan memperbaiki jaringan tubuh serta menjaga kesehatan tulang."
    },
    'tempe': {
        judul: "Tempe",
        isi: "<b>Kandungan:</b> Protein nabati lengkap, serat, probiotik.<br><br><b>Fungsi:</b> Mendukung pertumbuhan jaringan dan probiotik-nya sangat baik untuk kesehatan usus."
    },
    'ayam': {
        judul: "Ayam",
        isi: "<b>Kandungan:</b> Protein berkualitas tinggi, vitamin B6, B3.<br><br><b>Fungsi:</b> Membangun otot dan mendukung metabolisme serta fungsi saraf."
    },
    'mangga': {
        judul: "Buah Mangga",
        isi: "<b>Kandungan:</b> Vitamin A, C, antioksidan.<br><br><b>Fungsi:</b> Meningkatkan daya tahan tubuh, mempercepat penyembuhan luka, dan menjaga kesehatan mata."
    },
    'jeruk': {
        judul: "Buah Jeruk",
        isi: "<b>Kandungan:</b> Vitamin C, flavonoid.<br><br><b>Fungsi:</b> Meningkatkan sistem kekebalan tubuh dan menjaga kesehatan jantung."
    },
    'air': {
        judul: "Air Putih",
        isi: "<b>Kandungan:</b> Mineral alami.<br><br><b>Fungsi:</b> Mengatur suhu tubuh, membantu pencernaan, dan mencegah dehidrasi."
    }
};

// --- LOGIKA MODAL (POPUP) ---
function openFoodModal(kode) {
    const data = dataMakanan[kode];
    if (data) {
        document.getElementById('modal-title').innerText = data.judul;
        document.getElementById('modal-body').innerHTML = `<p>${data.isi}</p>`;
        document.getElementById('food-modal-overlay').classList.remove('hidden');
    }
}

function closeFoodModal() {
    document.getElementById('food-modal-overlay').classList.add('hidden');
}

// --- NAVIGASI HALAMAN ---
function showSection(sectionId) {
    const sections = ['home', 'cek-gizi', 'presentasi', 'kalkulator', 'artikel-word'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    const selected = document.getElementById(sectionId);
    if(selected) selected.classList.remove('hidden');

    const btnBack = document.getElementById('btn-back-home');
    if (sectionId === 'home') {
        btnBack.classList.add('hidden');
        document.body.style.backgroundColor = "#f0f2f5";
    } else {
        btnBack.classList.remove('hidden');
        if (sectionId === 'presentasi') {
            document.body.style.backgroundColor = "#e8f5e9";
        } else if (sectionId === 'artikel-word') {
            document.body.style.backgroundColor = "#d9d9d9";
        } else {
            document.body.style.backgroundColor = "#f0f2f5";
        }
    }
}

// --- BMI & KALKULATOR ---
function hitungBMI() {
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value) / 100;
    const display = document.getElementById('hasil-bmi');
    if (!berat || !tinggi) { display.innerHTML = "<span style='color:red'>Isi data!</span>"; return; }
    const bmi = (berat / (tinggi * tinggi)).toFixed(1);
    let status = bmi < 18.5 ? "Kurus" : bmi <= 24.9 ? "Normal" : bmi <= 29.9 ? "Gemuk" : "Obesitas";
    let warna = bmi < 18.5 ? "#f1c40f" : bmi <= 24.9 ? "#2ecc71" : bmi <= 29.9 ? "#e67e22" : "#c0392b";
    display.innerHTML = `<div style="font-size:2em;">${bmi}</div><span style="color:${warna}">${status}</span>`;
}

let display = document.getElementById('calc-display');
function appendCalc(val) { if(display) display.value += val; }
function clearCalc() { if(display) display.value = ''; }
function calculate() { try { if(display) display.value = eval(display.value); } catch (e) { if(display) display.value = 'Error'; } }