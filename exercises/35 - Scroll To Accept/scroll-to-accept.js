const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function enableToCBtn(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    scrollIntersection.unobserve(terms.lastElementChild);
  }
}

const scrollIntersection = new IntersectionObserver(enableToCBtn, {
  root: terms,
  threshold: 1,
});

scrollIntersection.observe(terms.lastElementChild);
