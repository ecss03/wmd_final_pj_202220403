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
  const image = document.querySelector('.scroll-image1');
  const rect = image.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    image.classList.add('visible');
  }
});

document.addEventListener('scroll', function () {
  const image = document.querySelector('.scroll-image2');
  const rect = image.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    image.classList.add('visible');
  }
});

document.addEventListener('scroll', function () {
  const image = document.querySelector('.scroll-image3');
  const rect = image.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    image.classList.add('visible');
  }
});

document.addEventListener('scroll', function () {
  const image = document.querySelector('.scroll-image4');
  const rect = image.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    image.classList.add('visible');
  }
});

document.addEventListener('scroll', function () {
  const image = document.querySelector('.scroll-image5');
  const rect = image.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    image.classList.add('visible');
  }
});

document.addEventListener('scroll', function () {
  const image = document.querySelector('.scroll-image6');
  const rect = image.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    image.classList.add('visible');
  }
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.scroll-text1');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  } else {
    text.classList.remove('visible');
  }
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.scroll-text2');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  } else {
    text.classList.remove('visible');
  }
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.scroll-text3');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  } else {
    text.classList.remove('visible');
  }
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.scroll-text4');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  } else {
    text.classList.remove('visible');
  }
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.scroll-text5');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  } else {
    text.classList.remove('visible');
  }
});

document.addEventListener('scroll', function () {
  const text = document.querySelector('.scroll-text6');
  const rect = text.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom >= 0) {
    text.classList.add('visible');
  } else {
    text.classList.remove('visible');
  }
});
