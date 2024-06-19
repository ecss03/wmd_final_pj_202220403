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
