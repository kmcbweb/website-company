
  // Fungsi untuk membersihkan karakter XSS
  function sanitizeText(str) {
    return str
      .replace(/</g, "")
      .replace(/>/g, "")
      .replace(/script/gi, "");
  }

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const messageField = document.getElementById('message');
    const rawMessage = messageField.value.trim();

    const phoneClean = phone.replace(/\D/g, '');

    // ✨ Sanitize message sebelum kirim
    const cleanedMessage = sanitizeText(rawMessage);
    messageField.value = cleanedMessage; // ✅ Ubah langsung isi textarea biar Netlify dapet data yang bersih

    // Validasi nama
    if (!name || name.length < 2 || !/^[a-zA-Z\s'.-]+$/.test(name)) {
      alert("Nama harus diisi dengan huruf minimal 2 karakter.");
      e.preventDefault();
      return;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Silakan masukkan email yang valid.");
      e.preventDefault();
      return;
    }

    // Validasi no. telepon
    if (!phone || phoneClean.length < 10 || phoneClean.length > 15) {
      alert("Nomor telepon harus terdiri dari 10–15 digit angka.");
      e.preventDefault();
      return;
    }

    // Validasi pesan
    if (!cleanedMessage || cleanedMessage.length < 5) {
      alert("Pesan harus minimal 5 karakter dan tidak boleh mengandung tag HTML.");
      e.preventDefault();
      return;
    }
  });

  // Opsional: bersihin pas ngetik juga
  function sanitizeInput(el) {
    el.value = sanitizeText(el.value);
  }


// WhatsApp Popup Functionality
const whatsappFloat = document.querySelector('.whatsapp-float');
const whatsappPopup = document.querySelector('.whatsapp-popup');
let popupTimeout;

whatsappFloat.addEventListener('mouseenter', function() {
    whatsappPopup.classList.add('show');
    clearTimeout(popupTimeout);
});

whatsappFloat.addEventListener('mouseleave', function() {
    popupTimeout = setTimeout(() => {
        whatsappPopup.classList.remove('show');
    }, 1500);
});

whatsappPopup.addEventListener('mouseenter', function() {
    clearTimeout(popupTimeout);
});

whatsappPopup.addEventListener('mouseleave', function() {
    popupTimeout = setTimeout(() => {
        whatsappPopup.classList.remove('show');
    }, 1500);
});
