const scrollContainer = document.getElementById('maintitle');
const texts = scrollContainer.querySelectorAll('.scroll-text');

scrollContainer.addEventListener('scroll', function (event) {
  texts.forEach((text) => {
    if (isElementInViewport(text)) {
      text.classList.add('visible');
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

window.addEventListener('load', function () {
  texts.forEach((text) => {
    if (isElementInViewport(text)) {
      text.classList.add('visible');
    }
  });
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.main_content-1');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  }
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.main_content-2');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  }
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.main_content-3');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  }
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.main_content-4');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  }
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.main_content-5');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  }
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.main_content-6');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  }
});
