// Toggle navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Smooth scrolling
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form validation
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitBtn = document.querySelector('.submit-btn');
const successMsg = document.querySelector('.success-msg');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    errorMsg.style.display = 'block';
    successMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'none';
    successMsg.style.display = 'block';
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
});
