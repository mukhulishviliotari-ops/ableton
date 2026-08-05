
const nav2 = document.getElementById('navbar_2');
const fadeThreshold = 150; 

window.addEventListener('scroll', () => {
  if (window.scrollY > fadeThreshold) {
    nav2.classList.add('faded-out');
  } else {
    nav2.classList.remove('faded-out');
  }
});


const observerOptions = {
  root: null,
  rootMargin: '0px 0px -100px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);


document.querySelectorAll('.scroll-fade').forEach((element) => {
  observer.observe(element);
});


function handleNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email-input');
  
  if (emailInput.value) {
    alert(`Thank you for subscribing with: ${emailInput.value}`);
    emailInput.value = '';
  }
}


document.getElementById('lang-select')?.addEventListener('change', (e) => {
  console.log(`Language changed to: ${e.target.value}`);
});

document.getElementById('loc-select')?.addEventListener('change', (e) => {
  console.log(`Location changed to: ${e.target.value}`);
});