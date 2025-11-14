/*Cookie Panel*/
const cookiePanel = document.querySelector('.cookie-panel');
const acceptBtn = document.querySelector('#acceptBtn');
const rejectBtn = document.querySelector('#rejectBtn');

function hasAcceptedCookies() {
  return document.cookie.split(';').some(cookie => cookie.trim().startsWith('cookie_consent'));
}

window.addEventListener('load', () => {
  if (!hasAcceptedCookies()) {
    cookiePanel.classList.add("show");
  }
});

acceptBtn.addEventListener('click', () => {
  document.cookie = "cookie_consent=Patyod-Klima; max-age=" + 60 * 60 * 24 * 30;
  cookiePanel.classList.remove("show");

  const gaScript = document.getElementById('gtag-script');

  if (gaScript && !gaScript.src) {
    gaScript.src = gaScript.dataset.src;

    gaScript.onload = () => {
      gtag('js', new Date());
      gtag('config', 'G-8ME9DQ3SZK');
    }
  }
});

rejectBtn.addEventListener('click', () => {
  cookiePanel.classList.remove("show");
});

/*Theme switch button*/
let darkmode = localStorage.getItem('darkmode');
const themeSwitches = document.querySelectorAll('.theme-switch');
const darkmodeImgs = document.querySelectorAll('.darkmode-img');

function updateTheme() {
  const isDark = localStorage.getItem('darkmode') === 'active';
  document.body.classList.toggle('darkmode', isDark);
  darkmodeImgs.forEach(img => {
    img.src = isDark ? './icons/light-blue.svg' : './icons/dark-blue.svg';
  });
}

themeSwitches.forEach(themeSwitch => {
  themeSwitch.addEventListener('click', () => {
    const isDark = localStorage.getItem('darkmode') === 'active';
    if (isDark) {
      localStorage.removeItem('darkmode');
    } else {
      localStorage.setItem('darkmode', 'active');
    }
    updateTheme();
  });
});

updateTheme();

/*Services card flip effect*/
const cards = document.querySelectorAll(".card__inner");

cards.forEach((card) => {
    card.addEventListener("click", function () {
        card.classList.toggle("is-flipped")
    })
})

/*Reference swiper*/
const swiper = new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 40,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  on: {
    imagesReady: function() {
      this.update();
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { slidesPerView: 1},
    769: { slidesPerView: 2 },
    1025: { slidesPerView: 3 }
  }
});

/*Scroll up button*/
let scrollUp = document.getElementById('scroll-up');
scrollUp.style.display = 'none';

window.addEventListener("scroll", () => {
  window.scrollY > 500 
    ? scrollUp.style.display = 'flex' 
    : scrollUp.style.display = 'none';
})

scrollUp.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

/*Hamburger menu*/
const hamburger = document.querySelector('.hamburger');
const mobileNavbar = document.querySelector('.nav-mobile');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('.mobile-nav-link');
const contactBtn = document.querySelector('.mobile-btn-contact');

hamburger.addEventListener('click', () => {
  mobileNavbar.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  mobileNavbar.classList.remove('show');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNavbar.classList.remove('show');
  });
});

contactBtn.addEventListener('click', () => {
  mobileNavbar.classList.remove('show');
});

window.history.scrollRestoration = "manual"; 