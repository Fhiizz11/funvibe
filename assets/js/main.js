/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Funvibe", "Playfest"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
srLeft.reveal('.form-control',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.info-box',{delay: 100})
srRight.reveal('.info-text',{delay: 100})
srRight.reveal('.info-image',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)

// Ambil form berdasarkan ID
const form = document.getElementById("form");

// Tambahkan event listener untuk menangani submit form
form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Mencegah reload halaman

  // Ambil data dari form
  const formData = new FormData(form);

  // Tampilkan loading SweetAlert
  const swalLoading = Swal.fire({
    title: "Mengirim...",
    text: "Mohon tunggu, data sedang dikirim.",
    icon: "info",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    // Kirim data menggunakan Fetch API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Tutup loading dan tampilkan alert sukses
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Terima kasih atas saran Anda!",
        confirmButtonText: "OK",
      });
      form.reset(); // Reset form setelah pengiriman sukses
    } else {
      // Tutup loading dan tampilkan alert gagal
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Terjadi kesalahan saat mengirimkan saran. Silakan coba lagi.",
        confirmButtonText: "OK",
      });
    }
  } catch (error) {
    // Tutup loading dan tampilkan alert gagal untuk error jaringan
    Swal.fire({
      icon: "error",
      title: "Gagal!",
      text: "Tidak dapat terhubung ke server. Periksa koneksi internet Anda.",
      confirmButtonText: "OK",
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const infoBoxes = document.querySelectorAll(".info-box");

  function revealOnScroll() {
      infoBoxes.forEach(box => {
          const boxTop = box.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (boxTop < windowHeight - 50) {
              box.classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Agar langsung muncul jika terlihat
});
