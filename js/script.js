const burger = document.querySelector('.header-burger');
const close = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');

let marginLeft = 0;
const prev = document.querySelector('.btn-btn-1');
const next = document.querySelector('.btn-btn-2');
const slide = document.querySelector('.carousel-slide');

const textHeading = document.querySelector('.text-heading');
const textParagraph = document.querySelector('.text-paragraph');

// open navigation on mobile devices
burger.addEventListener('click', function (e) {
  nav.style.display = 'block';

  setTimeout(() => {
    nav.classList.add('nav-show');
  }, 0);
});

// close navigation on mobile devices
close.addEventListener('click', function (e) {
  nav.classList.remove('nav-show');

  setTimeout(() => {
    nav.style.display = 'none';
  }, 500);
});

const textContain = function () {
  if (marginLeft === 0) {
    textHeading.textContent = 'Discover innovative ways to decorate';
    textParagraph.textContent = `
    We provide unmatched quality, comfort, and style for property owners
    across the country. Our experts combine form and function in bringing
    your vision to life. Create a room in your own style with our
    collection and make your property a reflection of you and what you
    love.`;
  } else if (marginLeft === 100) {
    textHeading.textContent = 'We are available all across the globe';
    textParagraph.textContent = `
    With stores all over the world, it's easy for you to find furniture
    for your home or place of business. Locally, we’re in most major
    cities throughout the country. Find the branch nearest you using our
    store locator. Any questions? Don't hesitate to contact us today.`;
  } else if (marginLeft === 200) {
    textHeading.textContent = 'Manufactured with the best materials';
    textParagraph.textContent = `
    Our modern furniture store provide a high level of quality. Our
    company has invested in advanced technology to ensure that every
    product is made as perfect and as consistent as possible. With three
    decades of experience in this industry, we understand what customers
    want for their home and office.`;
  }
};

// next slide btn
next.addEventListener('click', function (e) {
  if (marginLeft < 200) {
    marginLeft += 100;
    slide.style.marginLeft = `-${marginLeft}%`;
    textContain();
  }
});

// prev slide btn
prev.addEventListener('click', function (e) {
  if (marginLeft > 0) {
    marginLeft -= 100;
    slide.style.marginLeft = `-${marginLeft}%`;
    textContain();
  }
});
