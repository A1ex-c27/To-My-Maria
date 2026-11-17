
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.reason-card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('open'));
});
const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter-paper');
if (envelope && letter) envelope.addEventListener('click', () => {
  const opened = letter.classList.toggle('open');
  envelope.setAttribute('aria-expanded', String(opened));
  envelope.querySelector('.envelope-action').textContent = opened ? 'Your letter is open ♡' : 'Open my letter';
  if (opened) letter.scrollIntoView({behavior:'smooth', block:'start'});
});
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  document.querySelectorAll('.gallery-item img').forEach(img => img.addEventListener('click', () => {
    lightbox.querySelector('img').src = img.src;
    lightbox.querySelector('img').alt = img.alt;
    lightbox.classList.add('open');
  }));
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
}
document.querySelectorAll('.star').forEach(star => star.addEventListener('click', () => {
  document.querySelector('.star-message').textContent = star.dataset.message;
  star.style.color = '#fff';
  star.style.textShadow = '0 0 25px #fff, 0 0 45px #f4d88a';
}));

const enterButton = document.getElementById('enterWorld');
const openingScreen = document.getElementById('openingScreen');
if (enterButton && openingScreen) {
  enterButton.addEventListener('click', () => {
    openingScreen.classList.add('leaving');
    window.setTimeout(() => openingScreen.remove(), 1100);
  });
}
