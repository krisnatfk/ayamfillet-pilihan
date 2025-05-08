const scriptURL = 'https://script.google.com/macros/s/AKfycbwxvFqc5CRR1j8ypxq_GZ9QqxKtQ2OUNN_KfCcPT5Btbyn426Fm9eQGYpQYHU7WeayC/exec'; // Ganti dengan URL kamu
const form = document.forms['submit-to-google-sheet'];
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        successMsg.style.display = 'block';
        form.reset();
      } else {
        alert("Gagal mengirim. Coba lagi.");
      }
    })
    .catch(error => {
      alert("Terjadi kesalahan: " + error.message);
    });
});

    AOS.init();

    function validateForm(event) {
      event.preventDefault();

      let nama = document.getElementById("nama").value.trim();
      let nokontak = document.getElementById("nokontak").value.trim();
      let pesan = document.getElementById("pesan").value.trim();

      if (nama === "" || nokontak === "" || pesan === "") {
          alert("Harap isi semua kolom sebelum mengirim pesan!");
          return false;
      }
      alert("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
      
      document.getElementById("contactForm").reset();
      
      return true;
  }