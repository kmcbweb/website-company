<script>
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    const phoneClean = phone.replace(/\D/g, '');

    if (!name || name.length < 2 || !/^[a-zA-Z\s'.-]+$/.test(name)) {
      alert("Nama harus diisi dengan huruf minimal 2 karakter.");
      e.preventDefault();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Silakan masukkan email yang valid.");
      e.preventDefault();
      return;
    }

    if (!phone || phoneClean.length < 10 || phoneClean.length > 15) {
      alert("Nomor telepon harus terdiri dari 10–15 digit angka.");
      e.preventDefault();
      return;
    }

    if (!message || message.length < 5) {
      alert("Pesan harus minimal 5 karakter.");
      e.preventDefault();
      return;
    }
  });

  // Anti-XSS realtime saat mengetik pesan
  function sanitizeInput(el) {
    el.value = el.value
      .replace(/</g, "")
      .replace(/>/g, "")
      .replace(/script/gi, "");
  }
</script>

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
